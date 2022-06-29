import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItemsToDo } from './../actions/toDoActions';

export class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
    }

    textChangeHandler = event => {
        this.setState({
            inputText: event.target.value
        })
    }

    btnClickHandler = () => {
        this.props.addItem(this.state.inputText);
    }
  
    render() {
        console.log(this.props);
        let items = this.props.toDo.todos.map(item => {
            return (
                <p>{item}</p>
            )
        });

        return (
            <div>
                <p>To Do Application</p>

                <div className='items'>
                    <p>Items to do:</p>
                    <div>
                        {
                            items.length > 0 ?
                            items :
                            <p>No items added to the to-do list</p>
                        }
                    </div>
                </div>

                <input type="text" onChange={this.textChangeHandler} value={this.state.inputText} />
                <button onClick={this.btnClickHandler}>Add item to ToDo</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        toDo: state.toDo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: data => dispatch(addItemsToDo(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);