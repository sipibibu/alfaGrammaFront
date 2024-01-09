import {IQuestion} from "../../../types.ts";
import styles from "../QuestionCard/question-card.module.css";
import cn from "classnames";
import {QuestionType} from "../../../const.ts";
import {countQuestionAnswers} from "../../../utils/answers.ts";

type AnswerCardProps = {
    question: IQuestion
    answers: string[] | undefined
}

const AnswerCard = ({question, answers} : AnswerCardProps) => {

    if(answers == undefined){
        return null
    }

    return (
        <div className={styles.question}>
            <h2 className={cn(styles.title, question.isRequired && styles.required)}>
                {question.title}
            </h2>
            <div className={styles.questionField}>
                <ul>
                    {question.type != QuestionType.Text ?
                        countQuestionAnswers(question, answers)
                        .map((answer) =>
                                question.type == QuestionType.Radio || QuestionType.Scale ?
                                    <li>{answer.answer} {answer.count}</li>
                                    :
                                    <li>{answer.answer} {answer.count}</li>
                        )
                        :
                        answers.map((answer) => answer != '' && <li>{answer}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default AnswerCard;
