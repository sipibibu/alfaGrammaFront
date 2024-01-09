import styles from "./gramma-form.module.css";
import {useEffect, useState} from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import { useStores } from "../../rootStoreContext.ts";
import AnswersList from "./AnswersList/AnswersList.tsx";
import { createDictQuestionsAnswers } from "../../utils/answers.ts";

function GrammaFormManager() {
    const { id } = useParams();
    const { grammaStore, answersStore } = useStores();
    const grammaForm = grammaStore.grammaForm;
    const gramaAnswers = answersStore.grammaAnswers;
    const [dictAnswers, setDictAnswers] = useState<Map<string, string[]>>()
    useEffect(() => {
        if (id) {
            const intId = parseInt(id);
            if (!grammaForm || intId !== grammaForm.id || !gramaAnswers) {
                grammaStore.getGrammaForm(intId);
                answersStore.getGrammaAnswers(intId)
            } else {
                setDictAnswers(createDictQuestionsAnswers(answersStore.grammaAnswers))
            }
        }
        }, [id, grammaForm, gramaAnswers]);

    if (!grammaForm || !grammaForm.id || !dictAnswers) {
        return null;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{grammaForm.title}</h1>
            <p className={styles.description}>{grammaForm.description}</p>
            <AnswersList questions={grammaForm.questions} dictAnswers={dictAnswers}/>
        </div>
    );
}

export default observer(GrammaFormManager);
