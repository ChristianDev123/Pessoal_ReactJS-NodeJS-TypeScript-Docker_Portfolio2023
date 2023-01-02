import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    body, #root{
        width:100vw;
        height:100vh;
        background:var(--main-background-color);
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    a{
        text-decoration:none;
        color:#fff;
    }

    :root{
        --main-background-color:#0A0A0A;
        --second-background-color:#162227;
        --third-background-color:#FCF3EE;
        --btn-background-color:#0F171A;
        --mask-background:rgba(0,0,0,0.5);
    }
`;