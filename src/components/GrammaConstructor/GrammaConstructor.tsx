import styles from "./gramma-constructor.module.css";
import cn from "classnames";
import { ChangeEvent, useCallback, useState } from "react";
import { Gramma, Question } from "../../types.ts";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import CreateButton from "./CreateButton/CreateButton.tsx";
import QuestionsList from "./QuestionConstructor/QuestionsList/QuestionsList.tsx";

const initialGramma: Gramma = {
  dateFrom: "",
  dateTo: "",
  description: "",
  questions: [],
  title: "",
};

export default function GrammaConstructor() {
  const [gramma, setGramma] = useState<Gramma>(initialGramma);

  const handleTitleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setGramma((prevState) => ({ ...prevState, title: event.target.value }));
    },
    [],
  );

  const handleDescriptionChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setGramma((prevState) => ({
        ...prevState,
        description: event.target.value,
      }));
    },
    [],
  );

  const handleDateFromChange = useCallback((event: Dayjs | null) => {
    if (!event) {
      return;
    }
    setGramma((prevState) => ({ ...prevState, dateFrom: event.format() }));
  }, []);

  const handleDateToChange = useCallback((event: Dayjs | null) => {
    if (!event) {
      return;
    }
    setGramma((prevState) => ({ ...prevState, dateTo: event.format() }));
  }, []);

  const handleChangeQuestions = useCallback((questions: Question[]) => {
    setGramma((prevState) => ({ ...prevState, questions: questions }));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <input
          type={"text"}
          placeholder={"Название опроса"}
          className={styles.title}
          value={gramma.title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder={"Описание опроса"}
          className={styles.description}
          value={gramma.description}
          onChange={handleDescriptionChange}
        />
        <div />
        <div className={cn(styles.date, styles.dateFrom)}>
          <DateTimePicker
            label="Дата начала"
            ampm={false}
            onAccept={handleDateFromChange}
          />
        </div>
        <div className={cn(styles.date, styles.dateTo)}>
          <DateTimePicker
            className={styles.calendar}
            label="Дата конца"
            orientation="portrait"
            ampm={false}
            onAccept={handleDateToChange}
          />
        </div>
      </div>
      <QuestionsList
        questionsList={gramma.questions}
        questionsChange={handleChangeQuestions}
      />
      <CreateButton gramma={gramma} />
    </div>
  );
}
