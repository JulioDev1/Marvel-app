import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        text-decoration:none;
    }
    html, body, #root{
        height:100%;
    }
    body{
        background-color:#202020;
    }
`;
