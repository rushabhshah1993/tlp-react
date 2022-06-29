// import React, { Component } from 'react';

// export class Counter2 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: 0
//         }
//     };

//     componentDidMount() {
//         console.log(`You clicked ${this.state.counter} times`);
//     }

//     componentDidUpdate() {
//         console.log(`You clicked ${this.state.counter} times`);
//     }

//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.counter} times</p>
//                 <button onClick={() => this.setState({counter: this.state.counter +1})}>
//                     Increment
//                 </button>
//             </div>
//         )
//     }
// }

// export default Counter2;

import React, { useState, useEffect } from 'react';

const Counter2 = props => {
    const [counter, setCounter] = useState(0);
    const [title, setTitle] = useState(null);

    useEffect(
        () => {
            console.log(`You clicked ${counter} times`);
        }
    );

    return (
        <div>
            <p>You clicked {counter} times</p>
            <button onClick={() => setCounter(counter +1)}>
                Increment
            </button>
        </div>
    )
}

export default Counter2;