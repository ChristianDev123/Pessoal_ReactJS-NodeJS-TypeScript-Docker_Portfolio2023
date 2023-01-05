import styled from "styled-components";

export const Container = styled.div`
    background:url(${({image})=>image?image:"#fff"});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const BlackMask = styled.div`
    background:${({activate})=>activate?"rgba(0,0,0,0.5)":"transparent"};
    height:100%;
    width:100%;
    display:flex;
    align-items:${({activate})=>activate?"center":"flex-end"};
    justify-content:center;
`;
export const Title = styled.h3`

`;