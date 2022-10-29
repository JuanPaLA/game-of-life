import styled from "styled-components";

export const StyledCell = styled.div`
    border: 1px solid #ccc;
    min-width: 30px;
    min-height: 30px;
    max-width: 33px;
    max-height: 33px;
    background-color: ${props => (props.alive ? "dodgerblue" : "#fff")};
    margin: 1px;

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
    }
`;