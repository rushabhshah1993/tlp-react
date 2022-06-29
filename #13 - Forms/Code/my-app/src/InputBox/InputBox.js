import React from 'react';

import UncontrolledInput from '../UncontrolledInput/UncontrolledInput';

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: '',
            itemQuantity: 0
        }
    }

    inputChangeHandler = event => {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input 
                    name='itemName'
                    type={'text'} 
                    onChange={this.inputChangeHandler}
                    value={this.state.itemName} />

                <input 
                    name='itemQuantity'
                    type={'number'}
                    onChange={this.inputChangeHandler}
                    value={this.state.itemQuantity} />


                <UncontrolledInput />
            </div>
        )
    }
}

export default InputBox;
