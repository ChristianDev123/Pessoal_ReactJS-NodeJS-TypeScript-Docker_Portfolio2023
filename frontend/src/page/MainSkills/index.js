import { useEffect, useState } from "react";
import GenericCard from "../../components/GenericCard";
import { CardSection, Container, Title, TitleSection, TitleWrapper } from "./style";
import DogTest from '../../assets/dogtest.jpg'
import axios from "axios";

export default function MainSkills(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        //axios.get(`${process.env.REACT_APP_BACKEND_HOST}/mainskill`)
        axios.get('http://christianproject.com.br:3000/mainskill')
        .then((response)=>{
            response.data.forEach(({attributes, attributeMainSkill})=>{
                setData([...data, {...attributes, ...attributeMainSkill}]);
            });
        });
    },[]);

    return(
        <Container>
            <TitleSection>
                <TitleWrapper>
                    <Title>Principais Habilidades</Title>
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