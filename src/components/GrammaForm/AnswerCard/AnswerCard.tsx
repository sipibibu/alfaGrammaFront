import {IQuestion} from "../../../types.ts";
import styles from "../QuestionCard/question-card.module.css";
import cn from "classnames";
import {QuestionType} from "../../../const.ts";

type AnswerCardProps = {
    question: IQuestion
    answers: string[] | undefined
}

const AnswerCard = ({question, answers} : AnswerCardProps) => {
    const countQuestionAnswers = (question: IQuestion) => {
        const answerObjects = new Array<{answer: string, count: number}>()
        if(answers != undefined){
            if(question.options.length != 0){
                for (let i = 0; i < question.options.length; i++){
                    let countAnswers = 0
                    for(let j = 0; j < answers.length; j++){
                        if(question.options[i].text == answers[j]){
                            countAnswers += 1
                        }
                    }
                    answerObjects.push({answer: question.options[i].text, count: countAnswers})
                }
                return answerObjects
            }
            else return answers
        }
        else return new Array<string>()
    }

    return (
        <div className={styles.question}>
            <h2 className={cn(styles.title, question.isRequired && styles.required)}>
                {question.title}
            </h2>
            <div className={styles.questionField}>
                <ul>
                    {countQuestionAnswers(question)
                        .map((answer) =>
                                question.type == QuestionType.Radio || QuestionType.Scale ?
                                    <li>{answer.answer} {answer.count}</li>
                        :
                        question.type == QuestionType.Checkbox ?
                            <li>{answer.answer} {answer.count}</li>
                            :
                            <li>{answer.toString()}</li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default AnswerCard;
