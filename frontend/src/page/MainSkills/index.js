import { useState } from "react";
import GenericCard from "../../components/GenericCard";
import { CardSection, Container, Title, TitleSection, TitleWrapper } from "./style";
import DogTest from '../../assets/dogtest.jpg'

export default function MainSkills(){
    const [data, setData] = useState([
        {image:DogTest, title:'Teste', links:['teste','teste','teste'], description:"Teste du teste de teste"},
        {image:DogTest, title:'Teste', links:['teste','teste','teste'], description:"Teste du teste de teste"},
        {image:DogTest, title:'Teste', links:['teste','teste','teste'], description:"Teste du teste de teste"},
        {image:DogTest, title:'Teste', links:['teste','teste','teste'], description:"Teste du teste de teste"},
    ]);
    return(
        <Container>
            <TitleSection>
                <TitleWrapper>
                    <Title>Certificações</Title>
                </TitleWrapper>
            </TitleSection>
            <CardSection>
                {data.map(({title, description, image, links})=>(
                    <GenericCard title={title} image={image} links={links} description={description}/>
                ))}
            </CardSection>
        </Container>
    );
}