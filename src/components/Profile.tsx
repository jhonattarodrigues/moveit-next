import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://pbs.twimg.com/profile_images/1293660986864545795/C9GOfd8o_400x400.jpg" alt="Jhonatta Rodrigues"/>
      <div>
        <strong>Jhonatta Rodrigues</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level { level }
          </p>
      </div>
    </div>
  )
}