import styled from "styled-components";
import { device } from "../../styles/Globals";

export const StyledBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    padding: 1rem;
    width: 100%;
    height: 8vh;
    @media ${device.small} {
        height: 8vh;
    }
`;

export const StyledButton = styled.div`
    display: grid;    
    place-items: center;
    border: 1px solid #ccc;        
    margin: 0 0.3rem;
    width: 17%;
    max-width: 170px;
    height: 100%; 
    min-height: 40px;   
    font-size: 1.5rem;

    ${props => props.active && `
        background-color: #F9F7FA;
        border: 2px solid grey;
        color: black;        
        border-shadow: 0 0 10px grey;
    `}

    ${props => props.options && `
        background-color: #edf257;
        border: 2px solid grey;
        color: black;        
        border-shadow: 0 0 10px grey;
        border-radius: 5px;
    `}

    &:hover{
        cursor: pointer;
        background-color: #F9F7FA;
        color: black;
    }
`;

export const StyledFieldset = styled.fieldset`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #ccc;
    padding: 1rem;    
    font-size: 1.2rem;
    margin: 0.5rem;
    width: 90%;
    max-width: 700px;
    min-width: 350px;
    div{
        margin: 0 0.3rem;
        ${props => props.type === 'range' && `
            max-width: 40%;
            background-color: #F9F7FA;
        `}
    }
    @media ${device.small} {
        width: 90%;
        max-width: 90%;
        font-size: 1.1rem;
        div{
            input[type="range"]{
                max-width: 100px;
            }
        }
    }
    
`;

