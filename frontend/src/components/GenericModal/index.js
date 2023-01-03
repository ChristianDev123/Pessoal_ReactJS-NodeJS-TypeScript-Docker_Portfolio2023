import { Container, Description, Image, Link, Title, Wrapper, WrapperDescription, WrapperImage, WrapperLinks, WrapperTitle } from "./styles";

export default function GenericModal({links=[], image, title, description}){
    return(
        <Container>
            <Wrapper>
                <WrapperImage>
                    <Image src={image}/>
                </WrapperImage>
                <WrapperTitle>
                    <Title>{title}</Title>
                </WrapperTitle>
                <WrapperLinks>
                    {links.map((link,index)=>(
                        <Link key={index} href={link}>{link}</Link>
                    ))}
                </WrapperLinks>
                <WrapperDescription>
                    <Description>
                        {description}
                    </Description>
                </WrapperDescription>
            </Wrapper>
        </Container>
    );
}