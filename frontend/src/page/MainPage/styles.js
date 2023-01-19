import styled from 'styled-components';

export const Main = styled.main`
    & > #experience {
        position:relative;
        right:${({scrollPosition})=>scrollPosition > 180?"0":"100%"};
        ${({scrollPosition})=>scrollPosition > 180 && `
            animation-name:animationSections;
            animation-duration:1s;
            animation-timing-function:linear;
        `}
    }

    & > #contacts {
        position:relative;
        right:${({scrollPosition})=>scrollPosition > 1205?"0":"100%"};
        ${({scrollPosition})=>scrollPosition > 1205 && `
            animation-name:animationSections;
            animation-duration:1s;
            animation-timing-function:linear;
        `}
    }

    & > #certificates-formations {
        position:relative;
        right:${({scrollPosition})=>scrollPosition > 2370?"0":"100%"};
        ${({scrollPosition})=>scrollPosition > 2370 && `
            animation-name:animationSections;
            animation-duration:1s;
            animation-timing-function:linear;
        `}
    }

    & > #mainskills-projects {
        position:relative;
        right:${({scrollPosition})=>scrollPosition > 3305?"0":"100%"};
        ${({scrollPosition})=>scrollPosition > 3305 && `
            animation-name:animationSections;
            animation-duration:1s;
            animation-timing-function:linear;
        `}
    }

    @keyframes animationSections {
        from {
            right:100%;
        }
        to {
            right:0;
        }
    }
`;