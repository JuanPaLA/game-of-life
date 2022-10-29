import styled from "styled-components";

export const StyledCell = styled.div`
    border: 1px solid #ccc;
    // border-radius: 50%;
    min-width: 20px;
    min-height: 20px;
    width: 30px;
    height: 30px;
    background-color: ${props => (props.alive ? "dodgerblue" : "#fff")};
    margin: 1px;

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
    }
`;