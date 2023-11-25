import styles from './text.module.css';

export default function Text() {
  return (
    <input
      type={'text'}
      placeholder={'Введите ответ'}
      disabled
      className={styles.answer}
    />
  );
}
