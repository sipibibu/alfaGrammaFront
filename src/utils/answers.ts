import {IUserResponse} from "../types.ts";
import {QuestionType} from "../const.ts";

export const createDictQuestionsAnswers = (grammasList: IUserResponse[]) => {
    const dictQuestionsAnswers = new Map<string, string[]>
    for (let grammas of grammasList){
        for (let gramma of grammas.questions){
            if(gramma.question?.type != undefined && gramma.question?.title != undefined) {
                if(dictQuestionsAnswers.size != grammas.questions.length) {
                    const answerArrayOneAnswer = new Array<string>()
                    if(gramma.question.type == QuestionType.Checkbox){
                        for(let answer of gramma.text.toString().split(',')){
                            answerArrayOneAnswer.push(answer)
                        }
                    }
                    else answerArrayOneAnswer.push(gramma.text.toString())
                    dictQuestionsAnswers.set(gramma.question.title, answerArrayOneAnswer)

                }
                else {
                    const answersArray = dictQuestionsAnswers.get(gramma.question.title)
                    if(answersArray != undefined){
                        if(gramma.question.type == QuestionType.Checkbox){
                            for(let answer of gramma.text.toString().split(',')){
                                answersArray.push(answer)
                            }
                        }
                        else answersArray.push(gramma.text.toString())
                        dictQuestionsAnswers.delete(gramma.question.title)
                        dictQuestionsAnswers.set(gramma.question.title, answersArray)
                    }
                }
            }
        }
    }
    console.log(dictQuestionsAnswers)
    return dictQuestionsAnswers
}
