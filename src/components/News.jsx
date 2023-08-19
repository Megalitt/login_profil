import React from 'react';
import styles from '../styles/News.module.css';
import  Mask1 from '../image/Mask1.png';
import  Mask2 from '../image/Mask2.png';

const News = () => {
  return (
    <main className={styles.news}>
       <h2 className={styles['title-h2']}>ut aliquip ex ea commodo consequat</h2>
      <div className={styles.wrap}>
        <img className={styles['img-1']} src={Mask1}/>
        <div className={styles['text-wrap']}>
          <h4 className={styles['title-h4']}>Lorem ipsum dolor sit<br/> amet, consectetur<br/> adipiscing elit</h4>
          <p className={styles.text}>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div className={styles['text-wrap']}>
          <h4 className={styles['title-h4']}>Lorem ipsum dolor sit<br/> amet, consectetur<br/> adipiscing elit</h4>
          <p className={styles.text}>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <img className={styles['img-2']} src={Mask2}/>
      </div>
    </main>
  );
};

export default News;