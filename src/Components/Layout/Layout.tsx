
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="/images/Jolly Jolt Logo Large.svg" alt="Jolly Jolt Games" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/games">GAMES</Link>
            </li>
            <li>
              <Link to="/terms-of-use">TERMS OF USE</Link>
            </li>
            <li>
              <Link to="/privacy-policy">PRIVACY POLICY</Link>
            </li>
            <li>
              <Link to="/about-us">ABOUT US</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
