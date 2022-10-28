import styled from "styled-components";
import { device } from "../../styles/Globals";

export const StyledBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    // border: 1px solid #ccc;    
    margin-bottom: 1rem;
    padding: 1rem;
    width: 100%;
    height: 8vh;
    @media ${device.small} {
        height: 8vh;
    }
`;

export const StyledButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;    
    padding: 1.5rem 1.5rem;
    margin: 0 1rem;
    width: 30%;
    max-width: 250px;
    height: 80%;    
    font-size: 1.5rem;

    ${props => props.active && `
        background-color: #F9F7FA;
        border: 2px solid grey;
        color: black;        
        border-shadow: 0 0 10px grey;
    `}

    &:hover{
        cursor: pointer;
        background-color: #F9F7FA;
        color: black;
    }

    //if active prop is true, then change background color
    
`;