
import React, { useState, useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import { useDropdown } from './useDropdown';

const Layout: React.FC = () => {
  const { openDropdown, toggleDropdown, closeDropdown, useOutsideClick } = useDropdown();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const gamesDropdownRef = useRef<HTMLLIElement>(null);
  const privacyDropdownRef = useRef<HTMLLIElement>(null);

  useOutsideClick(gamesDropdownRef, () => {
    if (openDropdown === 'games') {
      closeDropdown();
    }
  });

  useOutsideClick(privacyDropdownRef, () => {
    if (openDropdown === 'privacy') {
      closeDropdown();
    }
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="/images/Jolly Jolt Logo Large.svg" alt="Jolly Jolt Games" />
          </Link>
        </div>
        <div className={styles.hamburger} onClick={toggleMobileMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navMobileOpen : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMobileMenu}>HOME</Link>
            </li>
            <li className={styles.dropdown} ref={gamesDropdownRef}>
              <button onClick={() => toggleDropdown('games')} className={styles.dropbtn}>
                GAMES
              </button>
              {openDropdown === 'games' && (
                <div className={styles.dropdownContent}>
                  <Link to="/tunnel-dodge" onClick={closeDropdown}>TunnelDodge</Link>
                </div>
              )}
            </li>
            <li>
              <Link to="/terms-of-use" onClick={toggleMobileMenu}>TERMS OF USE</Link>
            </li>
            <li className={styles.dropdown} ref={privacyDropdownRef}>
              <button onClick={() => toggleDropdown('privacy')} className={styles.dropbtn}>
                PRIVACY POLICY
              </button>
              {openDropdown === 'privacy' && (
                <div className={styles.dropdownContent}>
                  <Link to="/tunnel-dodge-privacy-policy" onClick={closeDropdown}>TunnelDodge Privacy Policy</Link>
                </div>
              )}
            </li>
            <li>
              <Link to="/about-us" onClick={toggleMobileMenu}>ABOUT US</Link>
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
