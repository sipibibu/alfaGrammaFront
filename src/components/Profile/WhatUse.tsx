import styles from './profile.module.css';

const whatUse = [
  'Ноутбук',
  'Яблоко',
  'Носки',
  'Карандаш',
  'Полотенце',
  'Вода',
  'Подушка',
  'Окно',
  'Дерево',
];

export default function WhatUse() {
  return (
    <>
      <h3 className={styles.whatUseTitle}>Чем пользуюсь</h3>
      <ul className={styles.whatUseList}>
        {whatUse.map((item) => (
          <li className={styles.whatUseItem}>{item}</li>
        ))}
      </ul>
    </>
  );
}
