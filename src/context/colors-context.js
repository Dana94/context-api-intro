import React, { useState } from 'react';

export const ColorsContext = React.createContext({
    colors: [],
    addColor: () => { },
    removeColor: () => { }
});

const ColorsContextProvider = props => {

    const [colorsList, setColorsList] = useState([]);

    const addColorHandler = (color) => {
        const newColors = [...colorsList];
        newColors.push(color);
        setColorsList(newColors);
    }

    const removeColorHandler = (color) => {
        setColorsList(colorsList.filter(aColor => aColor !== color));
    }

    return (
        <ColorsContext.Provider value={{ colors: colorsList, addColor: addColorHandler, removeColor: removeColorHandler }}>
            {props.children}
        </ColorsContext.Provider>
    )
}


export default ColorsContextProvider;
