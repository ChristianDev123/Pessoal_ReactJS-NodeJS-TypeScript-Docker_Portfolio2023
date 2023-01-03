import styled from "styled-components";

export const Container = styled.section`
    position:fixed;
    left:0;
    top:0;
    background: rgba(0,0,0,0.5);
    height:100vh;
    width:100vw;
    z-index: 2;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const Wrapper = styled.section`
    width:72rem;
    height:46rem;
    background:#000;
    border:1px solid rgba(255,255,255,.5);
    border-radius: 1rem;
    display:grid;
    grid-template-areas: 
    "img img title"
    "img img links"
    "desc desc desc";
    grid-template-columns: .8fr .8fr 15rem;
    grid-auto-rows: 1fr 1.5fr 1fr;
    color:#fff;
`;

export const WrapperTitle = styled.div`
    grid-area: title;
    height: 10rem;
    display:flex;
    align-items:center;
`;

export const WrapperLinks = styled.div`
    grid-area: links;
    display:flex;
    flex-direction: column;
    justify-content:space-around;
`;

export const WrapperImage = styled.div`
    grid-area: img;
`;

export const WrapperDescription = styled.div`
    grid-area: desc;
`;

export const Title = styled.h3`
    text-align:center;
    width:100%;
`;

export const Link = styled.a`
    display:block;
    text-align:center;
`;

export const Description = styled.p`

`;

export const Image = styled.img`
    background:#d9d9d9;
    width:100%;
    height:100%;
    border-top-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
`;