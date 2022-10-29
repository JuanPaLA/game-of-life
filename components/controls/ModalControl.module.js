import styled from "styled-components";
import { device } from "../../styles/Globals";

export const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    border: 1px solid #ccc;
    background-color: black;
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: black;
        padding: 1rem;
        border-radius: 5px;
        width: 100%;
        
        h1{
            font-size: 2rem;
            margin: 0 0.5rem;
        }
        p{
            text-align: center;
            font-size: 2rem;
            margin: 0 2rem;
        }
        span{
            margin: 1rem;
            padding: 1rem;
            border-radius: 5px;
            font-size: 1.5rem;
            width: 150px;
            &:hover{
                cursor: pointer;
                background-color: #F9F7FA;
                color: black;
            }

            @media ${device.small} {             
                width: 100%;
            }
            
        }
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