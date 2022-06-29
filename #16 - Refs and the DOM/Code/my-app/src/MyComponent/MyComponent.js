import React, { Component } from 'react';

export class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    btnClickHandler = () => {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                {/* <Parent ref={this.inputRef} /> */}
                <input type={'text'} ref={this.inputRef} />
                <button onClick={this.btnClickHandler}>Focus on the input box!</button>
            </div>
        )
    }
}

export default MyComponent;