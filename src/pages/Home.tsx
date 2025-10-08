import styles from './Home.module.css'
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Welcome to Jolly Jolt Games!</h1>
      <img className={styles.logo} src="/images/Jolly Jolt Logo Large.svg" alt="Jolly Jolt Games" />
    </div>
  );
};

export default Home;
