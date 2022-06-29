import React, { Component } from 'react';

export class Child extends Component {
    constructor(props) {
        super(props);
    }

    btnClickHandler = () => {
        this.props.input('Rushabh');
    }

    render() {
        return (
            <button onClick={this.btnClickHandler}>
                { this.props.btnText }
            </button>
        )
    }
}

export default Child;