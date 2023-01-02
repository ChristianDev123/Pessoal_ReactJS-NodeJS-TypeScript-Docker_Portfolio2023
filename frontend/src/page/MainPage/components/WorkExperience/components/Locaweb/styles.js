import styled from "styled-components";

export const Container = styled.section`
    /* height:50vh; */
    width:100vw;
    background:var(--third-background-color);
    display:flex;
    /* padding:1rem 2rem; */
`;

export const Title = styled.h2`
    font-size:4rem;
    font-weight: 400;
    margin: 1rem 0 0 2rem;
`;

export const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;
    &:nth-child(1){
        align-items:flex-start;   
    }
    &:nth-child(2){
        padding-bottom:1rem;
    }
`;

export const Image = styled.img`

`;

export const Period = styled.p`
    font-size:2rem;
`;