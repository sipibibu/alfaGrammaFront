import styles from "./gramma-constructor.module.css";
import cn from "classnames";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { IGrammaConstructor, IInterest, IQuestion } from "../../types.ts";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import CreateButton from "./CreateButton/CreateButton.tsx";
import QuestionsList from "./QuestionConstructor/QuestionsList/QuestionsList.tsx";
import SamplesSelect from "./SamplesSelect/SamplesSelect.tsx";
import { Samples, SampleVariants } from "../../utils/gramma_samples.ts";
import { useStores } from "../../rootStoreContext.ts";
import InterestSelect from "../InterestSelect/InterestSelect.tsx";

export default function GrammaConstructor() {
  const [gramma, setGramma] = useState<IGrammaConstructor>(
    Samples[SampleVariants.EMPTY],
  );
  const { grammaStore } = useStores();

  useEffect(() => {
    grammaStore.getInterests();
  }, []);
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

  const handleChangeQuestions = useCallback((questions: IQuestion[]) => {
    setGramma((prevState) => ({ ...prevState, questions: questions }));
  }, []);

  const handleChangeInterest = useCallback((interest: IInterest) => {
    setGramma((prevState) => ({ ...prevState, interest: interest }));
  }, []);

  const handleSampleChange = useCallback(
    (sample: keyof typeof SampleVariants) => {
      setGramma(Samples[sample]);
    },
    [],
  );

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SamplesSelect onChange={handleSampleChange} />
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
        <InterestSelect
          interests={grammaStore.interests}
          chosenInterest={gramma.interest}
          onChange={handleChangeInterest}
        />
        <div className={cn(styles.date, styles.dateFrom)}>
          <DateTimePicker
            sx={{ width: "100%" }}
            label="Дата начала"
            ampm={false}
            onAccept={handleDateFromChange}
          />
        </div>
        <div className={cn(styles.date, styles.dateTo)}>
          <DateTimePicker
            sx={{ width: "100%" }}
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
