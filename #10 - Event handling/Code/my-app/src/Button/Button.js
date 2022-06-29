import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    clickHandler = (e) => {
        console.log(event);
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <p>The value of the counter is: {this.state.counter}</p>
                <button onClick={this.clickHandler}>
                    Click Me!
                </button>
            </div>
        )
    }
}

export default Button;