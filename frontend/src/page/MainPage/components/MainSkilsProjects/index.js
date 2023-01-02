import { Link } from "react-router-dom";
import { Button, Container, Description, Image, Title, Wrapper, WrapperImage } from "./style";
import Arrow from '../../../../assets/arrow.svg';

export default function MainSkillsProjects(){
    return(
        <Container>
            <Wrapper>
                <Link>
                    <Button>
                        <Title>Projetos</Title>
                        <Description>Clique aqui para ver os certificados</Description>
                        <WrapperImage>
                            <Image src={Arrow}/>
                        </WrapperImage>
                    </Button>
                </Link>
                <Link>
                    <Button>
                        <WrapperImage>
                            <Image rotate src={Arrow}/>
                        </WrapperImage>
                        <Description>Clique aqui para ver as formações</Description>
                        <Title>Principais Tecnologias</Title>
                    </Button>
                </Link>
            </Wrapper>
        </Container>
    );
}