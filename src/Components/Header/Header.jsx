import React from "react";
import logo from '../../assets/logo.png';
// import { Link } from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {

return (
    <>
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <div className={styles.logoContainer}>                    
                    <img src={logo} alt="" />
                </div>
                <div className={styles.menuContainer}>
                    <ul className={styles.navList}>
                        <li>
                           <a href="#">Home</a> 
                        </li>
                        <li>
                           <a href="#gallery">Gallery</a>
                        </li>
                    </ul>
                    <button className={styles.headerButton}>Book Now</button>
                </div>
            </div>
        </div>
    </>
);
};

export default Header;
