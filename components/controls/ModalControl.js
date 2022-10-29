import React, { useState, useEffect } from 'react'
import { StyledModal, StyledModalContent,styledHeader, StyledButtons } from './ModalControl.module';
import { Context } from '../../Context';
import BottomControls from './BottomControls';

export default function ModalControl() {
    const context = React.useContext(Context);
    const {
        show,
        setShow,
        setStatus,
        setFlag
    } = context;

    const handleStart = () => {
        setFlag(true)
        setStatus(1)
        setShow(false)
    }

    if (show) {
        return (
            <StyledModal>
                <StyledModalContent>
                    <styledHeader>
                        <h1>Controls</h1>
                        <p>Set initial attributes</p>
                    </styledHeader>
                    <BottomControls type='axis' />
                    <BottomControls type='delay' />
                    <BottomControls type='startrandom' />
                    <StyledButtons>
                        <span onClick={() => handleStart()}>Start</span>
                        <span onClick={() => setShow(false)}>Close</span>
                    </StyledButtons> 

                </StyledModalContent>                
            </StyledModal>
        )
    }
}
