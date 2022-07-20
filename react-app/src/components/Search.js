import React, { Component } from 'react';

import styles from "./Search.module.css";

class Search extends Component {

    constructor() {
        super();
        this.state = {
            text: ""
        }
    }

    changeHandler = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    render() {

        const { text } = this.state;

        return (
            <div className={styles.container}>
                <p>Search What You Want</p>

                <div>
                    <input type="text" value={text} placeholder='Search . . .' onChange={this.changeHandler} />
                    <br />
                    <br />
                    <span className={styles.rewrite}>Resault : <br /> {text}</span>
                </div>
            </div>
        );
    }
}

export default Search;
