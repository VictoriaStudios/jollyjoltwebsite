
import React, { useState, useEffect, useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout: React.FC = () => {
  const [isGamesDropdownOpen, setIsGamesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleGamesDropdown = () => {
    setIsGamesDropdownOpen(!isGamesDropdownOpen);
  };

  const closeGamesDropdown = () => {
    setIsGamesDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeGamesDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            <li className={styles.dropdown} ref={dropdownRef}>
              <button onClick={toggleGamesDropdown} className={styles.dropbtn}>
                GAMES
              </button>
              {isGamesDropdownOpen && (
                <div className={styles.dropdownContent}>
                  <Link to="/example-game" onClick={closeGamesDropdown}>Example Game</Link>
                </div>
              )}
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
