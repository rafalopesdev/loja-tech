import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.containerheader}>
      <nav className={styles.header}>
        <ul>
          <li>
            <NavLink className={styles.link} to="/" end>
              Produto
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="contato" end>
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
