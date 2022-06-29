import React from 'react';

const InputElement = () => {
    const textChangeHandler = (text, event) => {
        console.log(text, event.target.value);
    }

    return (
        <input type={'text'} onChange={(event) => textChangeHandler('Hello', event)} />
    )
}

export default InputElement;