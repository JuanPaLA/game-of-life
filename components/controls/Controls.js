import React from 'react'
import { StyledBar, StyledButton } from './Controls.module';
import { Context } from '../../Context';
import { VscStopCircle, VscDebugRestart, VscDebugStart } from 'react-icons/vsc';
import { CgOptions } from 'react-icons/cg';
export default function ControlBar() {
    const context = React.useContext(Context);
    const { flag, setFlag, status, setStatus, setShow } = context;

    React.useEffect(() => {
        if (status === -1) {
            window.location.reload()
        }
    }, [status])

    return (
        <>
            <StyledBar>
                <StyledButton
                    active={status === 1 && flag ? true : false}
                    onClick={() => {
                        setFlag(true)
                        setStatus(1)
                    }}
                >
                    <VscDebugStart />
                </StyledButton>

                <StyledButton
                    active={status === 0 && !flag ? true : false}
                    onClick={() => {
                        setFlag(false)
                        setStatus(0)
                    }}
                >
                    <VscStopCircle
                    />
                </StyledButton>
                <StyledButton
                    active={status === -1 && !flag ? true : false}
                    onClick={() => {
                        window.location.reload()
                    }}
                >
                    <VscDebugRestart
                    />
                </StyledButton>
                <StyledButton
                    options={true}
                    onClick={() => {
                        setShow(true)
                    }}
                >
                    <CgOptions
                        options={true}
                    />
                </StyledButton>
            </StyledBar>
        </>
    )
}
