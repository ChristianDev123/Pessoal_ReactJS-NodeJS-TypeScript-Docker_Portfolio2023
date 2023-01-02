import { Container, Image, Period, Title, Wrapper } from "./styles";
import SabespLogo from '../../../../../../assets/sabesp.png';

export default function Sabesp(){
    return(
        <Container>
            <Wrapper>
                <Title>Sabesp</Title>
            </Wrapper>
            <Wrapper>
                <Image src={SabespLogo}/>
                <Period>09/2019 - 03/2021</Period>
            </Wrapper>
        </Container>
    );
}