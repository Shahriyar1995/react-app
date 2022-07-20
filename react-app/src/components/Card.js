import React, { Component } from 'react';

import styles from "./Card.module.css";

import down from '../images/down.svg';
import up from '../images/up.svg';

class Card extends Component {

    constructor() {
        super();

        this.state = {
            counter: 1
        }
    }





    // downHandler = () => {
    //     if (this.state.counter > 1) {
    //         this.setState({
    //             counter: this.state.counter - 1
    //         })
    //     }
    // }

    downHandler = () => {
        if (this.state.counter > 1) {
            this.setState(prevState => ({
                counter: prevState.counter - 1
            }))

        }
    }






    // upHandler = () => {

    //     if (this.state.counter < 9) {
    //         this.setState({
    //             counter: this.state.counter + 1
    //         })
    //     }
    // }

    upHandler = () => {
        if (this.state.counter < 9) {
            this.setState((prevState) => ({
                counter: prevState.counter + 1
            }))
        }
    }





    render() {

        const { image, name, cost } = this.props;
        const { counter } = this.state;

        return (
            <div className={styles.container}>
                <img src={image} alt="iphones" />
                <h3>{name}</h3>
                <p>{cost}</p>

                <div className={styles.counter}>
                    <img className={counter == 1 ? styles.deactive : ""} src={down} alt="Coutner-dwon" onClick={this.downHandler} />
                    <span>{counter}</span>
                    <img className={counter == 9 ? styles.deactive : ""} src={up} alt="Counter-up" onClick={this.upHandler} />
                </div>

            </div>
        );
    }

}



export default Card;