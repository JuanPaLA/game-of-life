import React from 'react'
import { StyledBar, StyledButton } from './Controls.module';
import { Context } from '../../Context';

export default function ControlBar() {
    const context = React.useContext(Context);
    const { flag, setFlag, status, setStatus } = context;

    React.useEffect(() => {
        if(status === -1){
            window.location.reload()
        }
    }, [status])

  return (
    <>
    <StyledBar>
        <StyledButton
            onClick={() => {
                setFlag(true)
                setStatus(1)
            }}
            active={status === 1 && flag ? true : false}
        >
            Start
        </StyledButton>
        <StyledButton
            onClick={() => {
                setFlag(false)
                setStatus(0)                
            }}
            active={status === 0 && !flag ? true : false}
        >
            Stop
        </StyledButton>
        <StyledButton
            onClick={() => {
                setFlag(false)
                setStatus(-1)
            }}
            active={status === -1 && !flag ? true : false}
        >
            Clear
        </StyledButton>
    </StyledBar>    
    </>
  )
}
