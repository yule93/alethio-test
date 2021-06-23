import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        ${({ darkMode }) => {
            return darkMode ? `background-color: rgba(56, 40, 92, 1)` : `background-color: rgba(255, 255, 255, 1)`;
        }}
        color:white;
        padding-top:50px;
    }
`;

export default GlobalStyles;