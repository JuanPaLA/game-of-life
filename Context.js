import React from 'react'
import { createContext } from 'react';

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [flag, setFlag] = React.useState(false);
    const [status, setStatus] = React.useState(0);
    const [ count, setCount] = React.useState(0);
    const [ _x, setX] = React.useState(9);
    const [ _y, setY] = React.useState(17);
    const [ delay, setDelay] = React.useState(1000);
    const [ startrandom, setStartRandom] = React.useState(true);
    const [ show, setShow] = React.useState(true);

    React.useEffect(() => {
        // if(!startrandom){
        //     setFlag(false)
        // }
    }, [startrandom])

    React.useEffect(() => {        
        document.title = `Count: ${count}`
        // console.log(count);
    }, [count])

    React.useEffect(() => {        
        console.log(flag);        
        if(flag === false){
            //set delat to infinete
            // setDelay(999999999)         
        }
    }, [flag])
    
    return (
        <Context.Provider value={{
            flag,
            setFlag,
            status,
            setStatus,
            count,
            setCount,
            _x,
            setX,
            _y,
            setY,
            delay,
            setDelay,
            startrandom,
            setStartRandom,
            show, 
            setShow
        }}>
            {children}
        </Context.Provider>
    )
}