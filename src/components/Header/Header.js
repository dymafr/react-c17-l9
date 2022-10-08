import React from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  const matchProfile = useMatch('/profile/:id');
  const matchHomepage = useMatch('/');

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <strong> React-router </strong>
      </div>
      <ul className={styles.headerList}>
        <NavLink end to="/">
          Homepage
        </NavLink>
        <NavLink to="/profile/123?age=12">Profile</NavLink>
      </ul>
    </header>
  );
}

export default Header;
