import React from 'react';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const validation = useSelector(state => state.forms.validation);
  
  return (
    <div className={styles.header}>
        <Link to="/" className={styles.link}>Главная</Link>
        <Link to="news" className={styles.link}>News</Link>
        {+validation
        ?
        <Link to="profil" className={styles.link}>Profil</Link>
        :
        <Link to="login" className={styles.link}>Profil</Link>
        }
    </div>
  );
};

export default Header;