import React from 'react'
import { createContext } from 'react';

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [flag, setFlag] = React.useState(false);
    const [status, setStatus] = React.useState(0);
    const [ count, setCount] = React.useState(0);

    return (
        <Context.Provider value={{flag, setFlag, status, setStatus, count, setCount}}>
            {children}
        </Context.Provider>
    )
}