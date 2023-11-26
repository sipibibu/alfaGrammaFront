import React from 'react';
import { Gramma } from '../../../types.ts';
import styles from './create-button.module.css';

type CreateButtonProps = {
  gramma: Gramma;
};

function CreateButton({ gramma }: CreateButtonProps) {
  const handleSubmit = () => {
    console.log(gramma);
  };
  return (
    <button className={styles.submit} type={'button'} onClick={handleSubmit}>
      Создать
    </button>
  );
}

export default React.memo(CreateButton);
