import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    padding: 3rem 4.5rem;
`;

export const Wrapper = styled.section`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;
    background:var(--second-background-color);
    border-radius: 3.5rem;
    height:100%;
    padding:6rem 4.5rem;
    & > a {
        height:100%;
        width:100%;
    }
    & > a:nth-child(1){
        padding-bottom:4.5rem;
    }
`;

export const Button = styled.div`
    display:flex;
    color:#fff;
    background:var(--btn-background-color);
    border-radius:1.5rem;
    box-shadow: 0 0 .4rem rgba(255,255,255,.4);
    height:100%;
    padding:1rem 1.5rem;
`;

export const Title = styled.h2`
    font-size:3rem;
    font-weight:400;
    width:100%;
    height:100%;
    &:nth-child(3){
        display:flex;
        justify-content:flex-end
    }
`;

export const Description = styled.p`
    height:100%;
    width:100%;
    display:flex;
    align-items: flex-end;
    text-align:center;
`;

export const WrapperImage = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    &:nth-child(3){
        justify-content:flex-end
    }
`;

export const Image = styled.img`
    rotate:${({rotate})=>rotate?"180deg":0};
`;