import { render } from "@testing-library/react";
import React, { Component } from "react";

class Flipper extends Component {
    static defaultProps = [
        {side: 'heads', url: 'https://tinyurl.com/react-coin-heads-jpg'}
        {side: 'tails', url: 'https://tinyurl.com/react-coin-tails-jpg'}
    ]
    super(props);
    this.state = {
        currCoin: null,
        nFlips: 0,
        nHeads: 0,
        nTails: 0
    };
    render(){
        return (
            <div className='flipper'>
                <h2>Flip a coin!</h2>
                <p>out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads, and {this.state.nTails}tails</p>
      </div>
        )
    }
}

export default Flipper;
