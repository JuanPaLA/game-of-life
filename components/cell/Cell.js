import React, { useEffect } from 'react'
import { StyledCell} from './Cell.module';
import { Context } from '../../Context';

export default function Cell({key_, cell, handler, finder}) {    
    const [cell_state, setCellState] = React.useState(cell)
    const [ neighbors, setNeighbors ] = React.useState([])    
    const { alive, x, y } = cell_state
    const context = React.useContext(Context);
    const { flag, setFlag, status, setStatus } = context;

    useEffect(() => {
        if(status !== -1 && flag){
            const interval = setInterval(() => {
                let alives = finder(x, y)[1]
                
                let next_state;
                if (alive) {
                    if (alives < 2) {
                        next_state = false;
                    }else if (alives === 2 || alives === 3) {
                        next_state = true;
                    }else if (alives > 3) {
                        next_state = false;
                    }
                }else{
                    if (alives === 3) {
                        next_state = true;
                    }else{
                        next_state = false;
                    }
                }
                setCellState({...cell_state, alive: next_state})
                handler(x, y, next_state)
            }, 500);
            return () => clearInterval(interval);
        }
    }, [status, flag])


  return (
    <StyledCell 
        alive={alive}
        onClick={() => {
            handler(x, y, !alive)
            setCellState({...cell_state, alive: !alive})
            finder(x, y)
        }}
    >
    </StyledCell>
  )
}
