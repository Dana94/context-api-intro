import React, {useState} from 'react';

export const ColorsContext = React.createContext({
    colors: []
});

const ColorsContextProvider = props => {
    
    return (
        <ColorsContext.Provider>
            {props.children}
        </ColorsContext.Provider>
    )
}


export default ColorsContextProvider;
