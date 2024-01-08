import {IUserResponse} from "../types.ts";

export const createDictQuestionsAnswers = (grammasList: IUserResponse[]) => {
    const dictQuestionsAnswers = new Map<string, string[]>
    for (let grammas of grammasList){
        for (let gramma of grammas.questions){
            if(gramma.question?.type != undefined && gramma.question?.title != undefined) {
                if(dictQuestionsAnswers.size != grammas.questions.length) {
                    const answerArrayOneValue = new Array<string>()
                    answerArrayOneValue.push(gramma.text.toString())
                    dictQuestionsAnswers.set(gramma.question.title, answerArrayOneValue)

                }
                else {
                    const answersArray = dictQuestionsAnswers.get(gramma.question.title)
                    if(answersArray != undefined){
                        answersArray.push(gramma.text.toString())
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
