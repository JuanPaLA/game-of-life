import styled from "styled-components";

export const StyledCell = styled.div`
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    background-color: ${props => (props.alive ? "dodgerblue" : "#fff")};
    margin: 10px;
`;