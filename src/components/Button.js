import React, { useState } from 'react';

import './Button.css';
import * as actions from '../store/actions';

const Button = props => {
    const [isAdded, setIsAdded] = useState(false);

    const addColorHandler = () => {
        setIsAdded(true);
        // props.onAddColor(props.color);
    }

    const removeColorHandler = () => {
        setIsAdded(false);
        // props.onRemoveColor(props.color);
    }

    return (
        // isAdded ?
        //     <button onClick={removeColorHandler}>Remove <br/> {props.color}</button> :
        //     <button onClick={addColorHandler}>Add <br/> {props.color}</button>
        <div></div>
    );
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onAddColor: (color) => dispatch(actions.addColor(color)),
//         onRemoveColor: (color) => dispatch(actions.removeColorDelay(color)),
//     }
// }

export default Button;
