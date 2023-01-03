import GenericDescCard from "../../components/GenericDescCard";
import { CardSection, Container, Title, TitleSection, TitleWrapper } from "./styles";
import DogTeste from '../../assets/dogtest.jpg';
import { useState } from "react";

export default function Formations(){
    const [data,setData] = useState([
        {title:`Dogao du Teste`, description:`
        oia u teste aiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
        iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
        iiiiiiiiiiiiiiiiiiiiiiiiiii`, image:DogTeste},
        {title:`Dogao du Teste`, description:`oia u teste aiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
        iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
        iiiiiiiiiiiiiiiiiiiiiiiiiii`, image:DogTeste},
        {title:`Dogao du Teste`, description:`oia u teste aiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
        iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
        iiiiiiiiiiiiiiiiiiiiiiiiiii`, image:DogTeste},
        {title:`Dogao du Teste`, description:`
        oia u teste aiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
        iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
        iiiiiiiiiiiiiiiiiiiiiiiiiii`, image:DogTeste},
    ]);
    return(
        <Container>
            <TitleSection>
                <TitleWrapper>
                    <Title>Formações</Title>
                </TitleWrapper>
            </TitleSection>
            <CardSection>
                {data.map(({title, description, image}, index)=>(
                    <GenericDescCard key={index} title={title} description={description} image={image}/>
                ))}
            </CardSection>
        </Container>
    );
}