import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        console.log("1. Constructor");
        super(props);
        this.state = {
            counter: 0
        }
    }

    static getDerivedStateFromProps = (props, state) => {
        console.log("getDerivedStateFromProps:   ", props, state);
        return state;
    }

    componentDidMount() {
        console.log("4. componentDidMount");
    }

    shouldComponentUpdate(state, props) {
        console.log("5. shouldComponentUpdate", state, props);
        return true;
    }

    componentDidUpdate() {
        console.log("6. componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("7. componentWillUnmount");
    }

    increment = () => {
        console.log("Increment method is called!");
        this.setState(
            prevState => {
                return {
                    counter: prevState.counter + 1
                }
            }
        );
    }

    render() {
        console.log("3. Render");
        return (
            <div className={'container'}>
                <p>The value of the counter is: {this.state.counter}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default Counter;
