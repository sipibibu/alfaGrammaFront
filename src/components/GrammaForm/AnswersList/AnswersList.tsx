import { IQuestionWithId } from "../../../types.ts";
import styles from "../QuestionsList/questions-list.module.css";
import AnswerCard from "../AnswerCard/AnswerCard.tsx";

type AnswersListProps = {
    questions: IQuestionWithId[]
    dictAnswers: Map<string, string[]>
}

const AnswersList = ({questions, dictAnswers} : AnswersListProps) => {
    return (
        <div>
            <div className={styles.questions}>
                {questions.map((question) => (
                    <AnswerCard question={question} answers={dictAnswers.get(question.title)}/>
                ))}
            </div>
        </div>
    );
};

export default AnswersList;
