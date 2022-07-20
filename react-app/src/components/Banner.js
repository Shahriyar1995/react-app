import React from 'react';

import styles from "./Banner.module.css";
import banner from "../images/banner2.png";


const Banner = () => {
    return (

        <div className={styles.container}>
            <img src={banner} alt="banner" />
            <div className={styles.textContainer}>
                <h1>ReactJS</h1>
                <p>We're learning <span>ReactJS</span> here.</p>
            </div>
        </div>



    );
};

export default Banner;