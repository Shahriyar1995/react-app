import React from 'react';

import styles from "./Navbar.module.css";
import reactLogo from "../images/REACT.png";

const Navbar = () => {


    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li>Home Page</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
            </div>

            <div>
                <img className={styles.logo} src={reactLogo} alt='logo' />
            </div>
        </header>
    );
};

export default Navbar;