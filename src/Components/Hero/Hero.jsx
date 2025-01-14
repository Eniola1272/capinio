import React from "react";
import styles from "./Hero.module.css";
import hero_img from '../../assets/hero.png'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.headingPrimary}>Redifining Quality & <span>Style</span></h1>
        <p className={styles.desc}>Proud 1st Place Winner of Canada’s ‘Under 15-Minutes Fade’ Challenge and Showcased at the 2024 Toronto Barber Expo Chapter II. Trusted by clients for unmatched precision, consistency, and style. Experience Excellence in Every Cut.</p>
        <button className={styles.btn}>Book Now</button>
      </div>
      <div className={styles.imgContainer}>
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
