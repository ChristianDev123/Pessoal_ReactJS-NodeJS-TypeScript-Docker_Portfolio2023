import { Link } from "react-router-dom";
import { Button, Container, Description, Image, Title, Wrapper, WrapperImage } from "./style";
import Arrow from '../../../../assets/arrow.svg';

export default function CertificatesFormation(){
    return(
        <Container>
            <Wrapper>
                <Link to="/certifications">
                    <Button>
                        <Title>Certificados</Title>
                        <Description>Clique aqui para ver os certificados</Description>
                        <WrapperImage>
                            <Image src={Arrow}/>
                        </WrapperImage>
                    </Button>
                </Link>
                <Link to="/formations">
                    <Button>
                        <WrapperImage>
                            <Image rotate src={Arrow}/>
                        </WrapperImage>
                        <Description>Clique aqui para ver as formações</Description>
                        <Title>Formações</Title>
                    </Button>
                </Link>
            </Wrapper>
        </Container>
    );
}