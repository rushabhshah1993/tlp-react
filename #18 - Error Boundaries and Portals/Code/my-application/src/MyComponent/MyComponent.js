import React, { Component } from 'react';

export class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    btnClickHandler = () => {
        this.setState({
            counter: this.state.counter+1
        });
    }

    // componentDidUpdate() {
    //     throw new Error('error!!');
    // }

    render() {
        if(this.state.counter === 4) {
            throw new Error('error!!');
        }

        return (
            <>
                <p>Hey, this is my cool new application!</p>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.btnClickHandler}>
                    Click 
                </button>
            </>
        )
    }
}

export default MyComponent;