import React, { useState, useEffect } from 'react'
import { StyledModal, StyledButtons } from './ModalControl.module';
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
                <div>
                    <h1>Modal</h1>
                    <p>Set the attributes with wich you want to start the game </p>
                    <BottomControls type='axis' />
                    <BottomControls type='delay' />
                    <BottomControls type='startrandom' />
                </div>
                <StyledButtons>
                    <span onClick={() => handleStart()}>Set</span>
                    <span onClick={() => setShow(false)}>Close</span>
                </StyledButtons>
            </StyledModal>
        )
    }
}
