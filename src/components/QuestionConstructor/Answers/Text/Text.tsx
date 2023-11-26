import styles from './text.module.css';

export default function Text() {
  return (
    <input
      type={'text'}
      placeholder={'Поле ответа'}
      disabled
      className={styles.answer}
    />
  );
}
