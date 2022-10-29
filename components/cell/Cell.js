import React, { useEffect } from 'react'
import { StyledCell} from './Cell.module';

export default function Cell({cell, handler}) {        
    const { alive, x, y } = cell

  return (
    <StyledCell 
        alive={alive}
        onClick={() => {
            handler(y, x, !alive)
        }}
    >    
    </StyledCell>
  )
}
