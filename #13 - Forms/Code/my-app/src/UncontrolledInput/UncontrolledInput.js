import React, { Component } from 'react';

export class UncontrolledInput extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.input.current.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type={'text'} ref={this.input} />
                <input type={'submit'} value={'Submit'} />
            </form>
        )
    }
}

export default UncontrolledInput;