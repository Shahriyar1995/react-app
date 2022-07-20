import React, { Component } from 'react';

import styels from "./Cards.module.css";
import Card from './Card';

import iphone10 from "../images/iphone10.png";
import iphone11 from "../images/iphone11.png";
import iphone12 from "../images/iphone12.png";
import iphone13 from "../images/iphone13.png";

class Cards extends Component {
    render() {
        return (
            <div className={styels.container}>
                <Card image={iphone10} name="Iphone 10" cost="500 $" />
                <Card image={iphone11} name="Iphone 11" cost="1000 $" />
                <Card image={iphone12} name="Iphone 12" cost="1500 $" />
                <Card image={iphone13} name="Iphone 13" cost="2000 $" />
            </div>
        );
    }
}



export default Cards;