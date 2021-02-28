import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/fernandoarag.png" alt="Fernando Aragão"/>

      <div>
        <strong>Fernando Aragão</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}