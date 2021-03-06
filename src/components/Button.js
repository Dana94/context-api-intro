import React, { useState, useContext, useEffect } from 'react';

import './Button.css';
import { ColorsContext } from '../context/colors-context';

const Button = props => {

    useEffect(() => {
        // keep component from re-rendering
    }, []);

    const [isAdded, setIsAdded] = useState(false);

    const colorsContext = useContext(ColorsContext);


    const addColorHandler = () => {
        setIsAdded(true);
        colorsContext.addColor(props.color);
    }

    const removeColorHandler = () => {
        setIsAdded(false);
        colorsContext.removeColor(props.color);
    }

    return (
        isAdded ?
            <button onClick={removeColorHandler}>Remove <br /> {props.color}</button> :
            <button onClick={addColorHandler}>Add <br /> {props.color}</button>
    );
}

export default Button;
