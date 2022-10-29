import React from 'react'
import { StyledFieldset } from './Controls.module'
import { Context } from '../../Context';

export default function BottomControls({ type }) {
    const context = React.useContext(Context);
    const {
        _x,
        _y,
        setX,
        setY,
        delay,
        setDelay,
        startrandom,
        setStartRandom,
    } = context;

    function handleDelayChange(e) {
        setDelay(Number(e.target.value));
    }

    const handleRadio = (bool) => {        
        console.log(bool);
        setStartRandom(bool);
    }

    if (type === 'axis') {
        return (
            <StyledFieldset>
                <legend>AXIS</legend>
                <div type="range">
                    y: {_y}<input type="range" min="10" max="50" value={_y} onChange={(e) => { setY(e.target.value) }} />
                </div>
                <div type="range">
                    x: {_x}<input type="range" min="5" max="70" value={_x} onChange={(e) => { setX(e.target.value) }} />
                </div>
            </StyledFieldset>
        )
    }
    if (type === 'delay') {
        return (
            <StyledFieldset>
                <legend>DELAY</legend>
                <div>
                    {delay} ms <input type="range" min="100" max="2000" value={delay} onChange={(e) => { handleDelayChange(e) }} />
                </div>
            </StyledFieldset>
        )
    }
    if (type === 'startrandom') {
        return (
            <StyledFieldset>
                <legend>Start patterns</legend>                
                    <div>
                        Empty: <input 
                            type="radio" 
                            value={startrandom} 
                            id="rf" 
                            checked={startrandom === false}
                            onChange={(e) => { handleRadio(false) }} />
                    </div>
                    <div>
                        Random: <input 
                            type="radio" 
                            value={startrandom} 
                            id="rt" 
                            checked={startrandom === true}
                            onChange={(e) => { handleRadio(true) }} />
                    </div>                
            </StyledFieldset>
        )
    }
}


