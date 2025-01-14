import React from "react";
import snapchat_icon from "../../assets/snapchat_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import phone_icon from "../../assets/phone_icon.png";
import styles from './SecHeader.module.css';

// import './SecHeader.css'

const SecHeader = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <img src={snapchat_icon} alt="" /> <span>capiniocuts</span>
        </li>
        <li className={styles.navItem}>
          <img src={instagram_icon} alt="" /> <span>@capinio_cuts</span>
        </li>
        <li className={styles.navItem}>
          <img src={phone_icon} alt="" /> <span>(819) 918-1089</span>
        </li>
      </ul>
    </div>
  );
};

export default SecHeader;
