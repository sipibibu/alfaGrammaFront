import styles from "./PollCard.module.css";
import grammaImage from "./gramma.png";
import {IGramma, IQuestion, IUserResponse} from "../../types.ts";
import { Link } from "react-router-dom";
import {useStores} from "../../rootStoreContext.ts";
import {observer} from "mobx-react-lite";

type PollCardProps = {
    gramma: Pick<IGramma, "id" | "title" | "description">;
};

const PollCardForManager = ({ gramma }: PollCardProps) => {
    const { answersStore} = useStores();
    const createDictQuestionsAnswers = (grammasList: IUserResponse[]) => {
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

    const countQuestionAnswers = (question: IQuestion) => {
        const questionAnswers = createDictQuestionsAnswers(answersStore.grammaAnswers).get(question.title)
        const answerTuples = new Array<[string, number]>()
        if(questionAnswers != undefined){
            if(question.options.length != 0){
                for (let option in question.options){
                    let countAnswers = 0
                    for(let answer in questionAnswers){
                        if(option == answer){
                            countAnswers += 1
                        }
                    }
                    answerTuples.push([option, countAnswers])
                }
            }
        }
    }

    return (
        // <Link to={`/ourgrammas/${gramma.id}`} style={{ textDecoration: "none" }}>
            <div className={styles.blockCard} onClick={() => {
                answersStore.getGrammaAnswers(gramma.id);
                console.log(answersStore.grammaAnswers);
                createDictQuestionsAnswers(answersStore.grammaAnswers);
            }}>
                    <img src={grammaImage} width={50} height={50} />
                <div className={styles.textHeading}>{gramma.title}</div>
                <div className={styles.textDescription}>
                    {gramma.description.length > 70
                        ? gramma.description.slice(0, 50) + "..."
                        : gramma.description}
                </div>
            </div>
        // </Link>
    );
};

export default observer(PollCardForManager);
