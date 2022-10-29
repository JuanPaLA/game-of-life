import styled from 'styled-components';
import { device } from '../../styles/Globals';


export const GridContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledGrid = styled.div`
    // border: 1px solid #ccc;
`;

export const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;    
`;

export const StyledInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    
    fieldset{
        margin: 1rem 0;        
    }
    div{
        min-width: 300px;
        max-width: 500px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        input:first-child{
            width: 70%;
        }
    
        input:last-child{
            width: 20%;
        }
    
        @media ${device.small} {
            width: 100%;
        }
    
        @media ${device.medium} {
            width: 100%;
        }
    
        @media ${device.mediumlarge} {
            width: 100%;
        }
    
        @media ${device.large} {
            max-width: 400px;
        }
    }


`;