import styled from "styled-components";

export const Container = styled.section`
    border-radius:.7rem;
    background:${({mouseEnter})=>mouseEnter?"var(--mouseEnter-card-color)":"var(--card-description-color)"};
    ${({mouseEnter})=>mouseEnter && "box-shadow: 0 0 .7rem #fff;"};
`;

export const WrapperImage = styled.div`
    background:var(--default-image-color);
    
`;

export const Image = styled.img`
    background:var(--default-image-color);
    width:${({mouseEnter})=>mouseEnter?"31rem":"15rem"};
    height:${({mouseEnter})=>mouseEnter?"14rem":"11rem"};
    border-top-left-radius: .7rem;
    border-top-right-radius: .7rem;
    transition: 1s;
`;

export const WrapperDescription = styled.div`
    background:${({mouseEnter})=>mouseEnter?"var(--mouseEnter-card-color)":"var(--card-description-color)"};
    height: calc(17.5rem - 11rem);
    border-bottom-left-radius: .7rem;
    border-bottom-right-radius: .7rem;
    width:${({mouseEnter})=>mouseEnter?"31rem":"15rem"};
    display:flex;
    flex-direction: column;
    justify-content:${({mouseEnter})=>mouseEnter?"space-between":"flex-end"};
    padding: .5rem;
    transition: 1s;
`;

export const Description = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: ${({mouseEnter})=>mouseEnter?3:4};
    overflow: hidden;
    -webkit-box-orient: vertical; 
    color:${({mouseEnter})=>mouseEnter?"#fff":"#000"};
`; 

export const Title = styled.h3`
    color:${({mouseEnter})=>mouseEnter?"#fff":"#000"};
    font-weight:400;
`;