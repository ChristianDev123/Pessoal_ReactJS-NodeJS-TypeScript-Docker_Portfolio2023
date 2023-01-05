import GenericCard from "../../components/GenericCard";
import { CardSection, Container, Title, TitleSection, TitleWrapper } from "./style";

export default function Certifications(){
    return(
        <Container>
            <TitleSection>
                <TitleWrapper>
                    <Title>Certificações</Title>
                </TitleWrapper>
            </TitleSection>
            <CardSection>
                <GenericCard/>
            </CardSection>
        </Container>
    );
}