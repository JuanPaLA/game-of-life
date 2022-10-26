import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const colors = {
    primary: "#0070f3",
    secondary: "#ff0080",
    black: "#000",
    white: "#fff",
    gray: "#ccc",
    lightGray: "#eee"
};

const size = {
    small: '425px',
    medium: '768px',
    large: '1024px',
  }

export const device = {
    small: `(max-width: ${size.small})`,
    medium: `(max-width: ${size.medium})`,
    mediumlarge: `(min-width: ${size.medium}) and (max-width: ${size.large})`,
    large: `(min-width: ${size.large})`,
    extralarge: `(min-width: 1200px)`,
};

export const StyledMain = styled.main`
    background-color: ${colors.black};
    min-height: 100vh;
    padding: 0 ;
    display: flex;
    flex-direction: column;    
    align-items: center;
    border: 1px solid ${colors.gray};
`;