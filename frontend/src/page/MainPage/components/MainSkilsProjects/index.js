import { Link } from "react-router-dom";
import { Button, Container, Description, Image, Title, Wrapper, WrapperImage } from "./style";
import Arrow from '../../../../assets/arrow.svg';

export default function MainSkillsProjects(){
    return(
        <Container>
            <Wrapper>
                <Link to="/projects">
                    <Button>
                        <Title>Projetos</Title>
                        <Description>Clique aqui para ver os certificados</Description>
                        <WrapperImage>
                            <Image src={Arrow}/>
                        </WrapperImage>
                    </Button>
                </Link>
                <Link to="/mainskills">
                    <Button>
                        <WrapperImage>
                            <Image rotate src={Arrow}/>
                        </WrapperImage>
                        <Description>Clique aqui para ver as formações</Description>
                        <Title>Principais Habilidades</Title>
                    </Button>
                </Link>
            </Wrapper>
        </Container>
    );
}