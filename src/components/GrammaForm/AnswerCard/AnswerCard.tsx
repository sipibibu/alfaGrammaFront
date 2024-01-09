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
                if(question.type == QuestionType.Scale){
                    for (let i = Number(question.options[0].text); i <=  Number(question.options[1].text); i += Number(question.options[2].text)) {
                        let countAnswers = 0
                        for (let j = 0; j < answers.length; j++) {
                            if (i.toString() == answers[j]) {
                                countAnswers += 1
                            }
                        }
                        if(countAnswers != 0){
                            answerObjects.push({answer: i.toString(), count: countAnswers})
                        }
                    }
                }
                else {
                    for (let i = 0; i < question.options.length; i++) {
                        let countAnswers = 0
                        for (let j = 0; j < answers.length; j++) {
                            if (question.options[i].text == answers[j]) {
                                countAnswers += 1
                            }
                        }
                        answerObjects.push({answer: question.options[i].text, count: countAnswers})
                    }
                }
                return answerObjects
            }
            else return new Array<string>()
        }
        else return new Array<string>()
    }

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
                        countQuestionAnswers(question)
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
