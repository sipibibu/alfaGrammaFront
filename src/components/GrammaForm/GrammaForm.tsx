import styles from "./gramma-form.module.css";
import { QuestionType } from "../../const.ts";
import QuestionsList from "./QuestionsList/QuestionList.tsx";
import SubmitButton from "./SumbitButton/SubmitButton.tsx";
import { useEffect, useState } from "react";
import { IQuestionAnswer, IQuestionWithId } from "../../types.ts";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import { useStores } from "../../rootStoreContext.ts";

const getInitialUserValues = (question: IQuestionWithId): IQuestionAnswer => {
  switch (question.type) {
    default:
    case QuestionType.Text:
      return { questionId: question.id, text: "" };
    case QuestionType.Radio:
      return { questionId: question.id, text: "" };
    case QuestionType.Checkbox:
      return { questionId: question.id, text: [] };
    case QuestionType.Scale:
      return {
        questionId: question.id,
        text: question.options[0].text,
      };
  }
};

function GrammaForm() {
  const { id } = useParams();
  const { grammaStore } = useStores();
  const grammaForm = grammaStore.grammaForm;
  const [userAnswers, setUserAnswers] = useState<IQuestionAnswer[]>([]);
  useEffect(() => {
    if (id) {
      const intId = parseInt(id);
      if (!grammaForm || intId !== grammaForm.id) {
        grammaStore.getGrammaForm(intId);
      } else {
        setUserAnswers(
          [...grammaForm.questions].map((question) =>
            getInitialUserValues(question),
          ),
        );
      }
    }
  }, [id, grammaForm]);

  if (!grammaForm || !grammaForm.id || userAnswers.length === 0) {
    return null;
  }
  const handleUserAnswerChange = (updated: IQuestionAnswer) => {
    setUserAnswers((prevState) => {
      const index = prevState.findIndex(
        (answer) => answer.questionId === updated.questionId,
      );
      return [
        ...prevState.slice(0, index),
        updated,
        ...prevState.slice(index + 1, prevState.length),
      ];
    });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{grammaForm.title}</h1>
      <p className={styles.description}>{grammaForm.description}</p>
      <QuestionsList
        questions={[...grammaForm.questions] as IQuestionWithId[]}
        userAnswers={userAnswers}
        onAnswerChanged={handleUserAnswerChange}
      />
      <SubmitButton answers={userAnswers} grammaId={grammaForm.id} />
    </div>
  );
}

export default observer(GrammaForm);
