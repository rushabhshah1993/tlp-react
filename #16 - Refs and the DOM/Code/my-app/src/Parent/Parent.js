import React, { Component } from 'react';

import Child from './../Child/Child';

export class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    inputHandler = value => {
        this.setState({
            user: value
        });
    }

    render() {
        return (
            <div>
                <h1>Parent - {this.state.user}</h1>
                <Child btnText={'Click'} input={this.inputHandler} />
            </div>
        )
    }
}

export default Parent;

// Forwarding refs
// const Parent = React.forwardRef((props, ref) => (
//     <Child ref={ref} btnText={'Click'} input={this.inputHandler} />
// ))

