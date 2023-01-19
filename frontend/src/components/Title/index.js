import { Container, TitleText } from "./styles";

export default function Title({msg}){
    return(
        <Container>
            <TitleText>
                {msg}
            </TitleText>
        </Container>
    );
}