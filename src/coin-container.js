import { render } from "@testing-library/react";
import React, { Component } from "react";
import {choice} from "./helper";
import Coin from "./coin";
import "./coin.css";


class Flipper extends Component {
    static defaultProps = {
    coins:[
        {side: "heads", imgSrc: require('./heads.jpeg')},
        {side: "tails", imgSrc: require('./tails.jpeg')}
    ]
};
    constructor(props){
    super(props);
    this.state = {
        currCoin: null,
        nFlips: 0,
        nHeads: 0,
        nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
        let newState = {
            ...st,
            currCoin: newCoin,
            nFlips: st.nFlips + 1
        }
        if (newCoin.side === "heads") {
            newState.nHeads += 1;
        } else {
            newState.nTails += 1;
        }
            return newState;
        });
    }

    handleClick(e) {
        this.flipCoin();
    }

    render(){
        return (
            <div className='flipper'>
                <h2>Flip a coin!</h2>
                
                {this.state.currCoin && <Coin info={this.state.currCoin} />}

                <button onClick={this.handleClick}>Flip it</button>
                
                <p>Out of {this.state.nFlips} flips,
                there have been {this.state.nHeads}{" "} heads,
                and {this.state.nTails} tails</p>
      </div>
        )
    }
}

export default Flipper;
