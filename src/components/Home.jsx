import React from 'react';
import styles from '../styles/Home.module.css';
import Mask4 from '../image/Mask4.png';

const Home = () => {
  return (
    <div className={styles.home}>
      <img src={Mask4} alt="none" />
    </div >
  );
};

export default Home;