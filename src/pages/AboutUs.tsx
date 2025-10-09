
import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs: React.FC = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is a placeholder for the About Us page.</p>
      <h1>Account deletion</h1>
      <p>If you want your data deleted from our servers, write an email from the gmail account you used in game. We will contact you with a confirmation mail.</p>
      <a href="mailto:marcel.bruna@epistula-electronica.de?subject=Account%20Deletion&body=Hi! I would like to have my account deleted." className={styles.button}>Delete Account</a>
    </div>
  );
};

export default AboutUs;
