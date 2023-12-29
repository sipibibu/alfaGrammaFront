import styles from "./gramma-form.module.css";
import { QuestionType } from "../../const.ts";
import QuestionsList from "./QuestionsList/QuestionList.tsx";
import SubmitButton from "./SumbitButton/SubmitButton.tsx";
import { useEffect, useState } from "react";
import { IQuestionAnswer, IQuestionForm, ScaleOptions } from "../../types.ts";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import { useStores } from "../../rootStoreContext.ts";

const getInitialUserValues = (questionForm: IQuestionForm): IQuestionAnswer => {
  switch (questionForm.type) {
    default:
    case QuestionType.Text:
      return { questionId: questionForm.id, text: "" };
    case QuestionType.Radio:
      return { questionId: questionForm.id, text: "" };
    case QuestionType.Checkbox:
      return { questionId: questionForm.id, text: [] };
    case QuestionType.Scale:
      return {
        questionId: questionForm.id,
        text: (questionForm.options as ScaleOptions).from,
      };
  }
};

function GrammaForm() {
  const { id } = useParams();
  const { grammaStore } = useStores();
  const grammaForm = grammaStore.grammaForm;
  const [userAnswers, setUserAnswers] = useState<IQuestionAnswer[]>([]);
  console.log(grammaForm);

  useEffect(() => {
    if (id) {
      const intId = parseInt(id);
      if (!grammaForm || intId !== grammaForm.id) {
        grammaStore.getGrammaForm(intId);
      }
      else {
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
  console.log(grammaForm);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{grammaForm.title}</h1>
      <p className={styles.description}>{grammaForm.description}</p>
      <QuestionsList
        questions={[...grammaForm.questions] as IQuestionForm[]}
        userAnswers={userAnswers}
        onAnswerChanged={handleUserAnswerChange}
      />
      <SubmitButton answers={userAnswers} grammaId={grammaForm.id} />
    </div>
  );
}

export default observer(GrammaForm);
