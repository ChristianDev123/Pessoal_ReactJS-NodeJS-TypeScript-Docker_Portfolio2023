import Locaweb from "./components/Locaweb";
import Sabesp from "./components/Sabesp";
import { Container } from "./styles";

export default function WorkExperience(){
    return(
        <Container>
            <Sabesp/>
            <Locaweb/>
        </Container>
    );
}