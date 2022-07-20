import React from 'react';

import styles from "./Logos.module.css";

import apple from "../images/apple.png";
import samsung from "../images/samsung.png";
import xiaomi from "../images/xiaomi.png";


const Logos = () => {


    return (
        <div className={styles.container}>
            <h3>Who Supports Us ?</h3>
            <div className={styles.flex}>
                <img src={apple} alt="Apple" />
                <img src={samsung} alt="Samsung" />
                <img src={xiaomi} alt="Xiaomi" />
            </div>
        </div>
    );
};

export default Logos;