import Locaweb from "./components/Locaweb";
import Sabesp from "./components/Sabesp";
import Title from "../../../../components/Title";
import { Container } from "./styles";

export default function WorkExperience(){
    return(
        <Container id="experience">
            <Title msg="Experiências Profissionais"/>
            <Sabesp/>
            <Locaweb/>
        </Container>
    );
}