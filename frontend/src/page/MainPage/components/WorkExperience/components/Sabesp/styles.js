import styled from "styled-components";
import WaterGif from '../../../../../../assets/background_sabesp.gif'

export const Container = styled.section`
    height:50vh;
    width:100vw;
    background:url(${WaterGif}) no-repeat;
    background-size: cover;
    display:flex;
    padding:1rem 2rem;
`;

export const Title = styled.h2`
    color:#fff;
    font-size:4rem;
    font-weight: 400;
`;

export const Wrapper = styled.div`
    width:100%;
    &:nth-child(2){
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: space-between;
    }
`;

export const Image = styled.img`

`;

export const Period = styled.p`
    color:#fff;
    font-size:2rem;
`;