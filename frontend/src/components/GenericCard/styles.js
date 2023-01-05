import styled from "styled-components";

export const Container = styled.div`
    background:${({image})=>image?`url(${image})`:"#fff"};
    background-repeat: no-repeat;
    background-size: cover;
    width:17rem;
    height:16rem;
    border-radius:1rem;
`;

export const BlackMask = styled.div`
    background:${({activate})=>activate?"rgba(0,0,0,0.5)":"transparent"};
    height:100%;
    width:100%;
    display:flex;
    align-items:${({activate})=>activate?"center":"flex-end"};
    justify-content:center;
    transition: 1s;
    ${({activate})=>!activate&&`
        & > h3 {
            padding:.4rem 0;
            width:100%;
            background:rgba(0,0,0,0.5);
            text-align:center;        
        }    
    `}
`;

export const Title = styled.h3`
    color:#fff;
    text-shadow: 0 0 1px #000;
    font-size:1.5rem;
`;