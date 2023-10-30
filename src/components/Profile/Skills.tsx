import styles from './profile.module.css';

const skills = {
  hardSkills: ['React', 'TS', 'Redux'],
  softSkills: ['Коммуникабельность', 'Стрессоустойчивость', 'Ответсвенность'],
};

export default function Skills() {
  return (
    <>
      <h3 className={styles.skillsTitle}>Навыки</h3>
      <div className={styles.skillsContainer}>
        <ul className={styles.skills}>
          <h4 className={styles.skillsType}>Hard Skills</h4>
          {skills.hardSkills.map((skill) => (
            <li className={styles.skill}>{skill}</li>
          ))}
        </ul>
        <ul className={styles.skills}>
          <h4 className={styles.skillsType}>Soft Skills</h4>
          {skills.softSkills.map((skill) => (
            <li className={styles.skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
