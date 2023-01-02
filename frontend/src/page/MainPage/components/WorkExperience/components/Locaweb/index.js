import { Container, Image, Period, Title, Wrapper } from "./styles";
import LocawebLogo from '../../../../../../assets/locaweb logo.svg';
import GenericImage from '../../../../../../assets/generic image.svg';
export default function Locaweb(){
    return(
        <Container>
            <Wrapper>
                <Title>Locaweb</Title>
                <Image src={GenericImage}/>
            </Wrapper>
            <Wrapper>
                <Image src={LocawebLogo}/>
                <Period>10/2022 - Atualmente</Period>
            </Wrapper>
        </Container>
    );
}