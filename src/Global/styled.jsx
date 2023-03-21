import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    html, body, #root{
        height:100%;
    }
    body{
        background-color:#0E0E0E;
    }
`;
