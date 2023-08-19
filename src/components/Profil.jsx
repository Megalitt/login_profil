import React from 'react';
import styles from '../styles/Profil.module.css';
import Srd from '../image/photo.jpg';

const Profile = () => {
  return (
    <div className={styles.about}>
      <div className={styles.text}>
        <p><img src={Srd}/><span>Андрей, 41 год<br/></span><br/>
        Быстро учусь, не боюсь сложных задач.
        Легко осваиваю новые технологии.<br/><br/>
        <span>Основные технологии:</span> React, HTML5, CSS3, JavaScript, TypeScript.<br/><br/>
        <span>Технологии:</span> Figma, Flex, Grid, GitHup, БЭМ, SASS, SCSS, jQuery, Materialize, canvas.
        В рамках учебного курса знаком с postgreSQL и PHP.<br/>
        <span>React,</span> Хуки и сопутствующие технологии (Redux, Webpack, Router и др.).<br/><br/>
        <span>Основные навыки:</span> адаптивная/отзывчивая, кроссбраузерная верстка сайта из Figma(Pixso). Pixel Perfect верстка. Анимации на js, css, jQuery. Работа с DOM на JS. Активное использование плагина Emmet.<br/><br/>
        <span>GitHub: </span><a href='https://github.com/Megalitt?tab=repositories' alt="none">https://github.com/Megalitt?tab=repositories</a> <br/><br/>
        <span>hh: </span><a href='https://kirov.hh.ru/resume/403da582ff099273de0039ed1f354b6b576867' alt="none">https://kirov.hh.ru/resume/403da582ff099273de0039ed1f354b6b576867</a> <br/><br/>
        В последние годы работал по другой специальности.
        Имею опыт и знания в электротехнике.<br/><br/>
        <span>Хобби:</span> ламповая техника, ламповые усилители, часы на неоновых индикаторах. В рамках хобби немного программировал PIC микроконтроллеры на ассемблере.<br/><br/>
        <span>Высшее образование - </span>
        Вятский государственный университет, Киров (Кировская область)
        Электротехнический факультет, Электрические станции</p>
      </div>
    </div>
  );
};

export default Profile;