import styles from './Home.module.css'
import React from 'react';
import logo from '/images/Jolly Jolt Logo Large.svg';

const Home: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Welcome to Jolly Jolt Games!</h1>
      <img className={styles.logo} src={logo} alt="Jolly Jolt Games" />
    </div>
  );
};

export default Home;
