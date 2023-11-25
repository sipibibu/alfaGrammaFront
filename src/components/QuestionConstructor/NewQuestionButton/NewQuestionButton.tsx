import styles from './new-question-button.module.css';

type NewQuestionButtonProps = {
  onClick: () => void;
};

export default function NewQuestionButton({ onClick }: NewQuestionButtonProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        className={styles.plus}
      >
        <path d="M24.5 0L24.5 50" stroke="black" />
        <path d="M0 25.334H50" stroke="black" />
      </svg>
      <p className={styles.text}>Нажмите, чтобы добавить вопрос</p>
    </div>
  );
}
