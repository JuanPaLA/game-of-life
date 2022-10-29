import styled from "styled-components";
import { device } from "../../styles/Globals";

export const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;    
    background-color: black;    
`;

export const StyledModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;    
    max-height: 100vh;
    z-index: 999;
    border: 1px solid #ccc;
    background-color: black;
    min-width: 340px;
    padding: 1rem;
    position: relative;
    top: 10%;

    @device ${device.small} {
        min-width: 350px;
        max-width: 100vw;                
    }
    @device ${device.medium} {
        min-width: 425px;
        max-width: 425px;
        max-height: 80vh;
    }
    @device ${device.mediumlarge} {
        min-width: 768px;
        max-width: 768px;
    }
    @device ${device.large} {
        min-width: 800px;
        max-width: 800px;
    }
    @device ${device.extralarge} {
        min-width: 1024px;
        max-width: 1024px;
    }
`;

export const styledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    h1{
        
    }
    p{
        
    }
`;

export const StyledButtons = styled.section`
    display: flex;        
    flex-direction: row;
    background-color: black;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    span{
        text-align: center;
        margin: 1rem;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1.5rem;
        width: 150px;
        &:hover{
            cursor: pointer;    
            background-color: #F9F7FA;
            color: black;
        }
        @media ${device.small} {
            width: 40%;
        }
    }
`;
