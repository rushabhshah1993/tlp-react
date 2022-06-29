import React, { Component } from 'react';

export class MyComponent extends Component {
    render() {
        let arr = ['Orange', 'Pineapple', 'Apple'];
        let element = arr.map(item => (
            <p key={item}>{item}</p>
        ));

        return (
            <React.Fragment>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>{element}</td>
            </React.Fragment>
        )
    }
}

export default MyComponent;


// function Glossary(props) {
//     return (
//       <dl>
//         {props.items.map(item => (
//           // Without the `key`, React will fire a key warning
//           <React.Fragment key={item.id}>
//             <dt>{item.term}</dt>
//             <dd>{item.description}</dd>
//           </React.Fragment>
//         ))}
//       </dl>
//     );
// }
