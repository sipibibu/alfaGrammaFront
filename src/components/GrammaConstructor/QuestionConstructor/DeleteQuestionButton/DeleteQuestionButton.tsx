import styles from "./delete-question-button.module.css";

type DeleteQuestionButtonProps = {
  onClick: () => void;
};

export default function DeleteQuestionButton({
  onClick,
}: DeleteQuestionButtonProps) {
  return (
    <button onClick={onClick} className={styles.delete}>
      <svg
        fill="#ff4848"
        height="20px"
        width="20px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 490 490"
        xmlSpace="preserve"
      >
        <polygon
          points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490
	489.292,457.678 277.331,245.004 489.292,32.337 "
        />
      </svg>
    </button>
  );
}
