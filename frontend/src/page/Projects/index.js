import axios from "axios";
import { useEffect, useState } from "react";
import GenericDescCard from "../../components/GenericDescCard";
import { CardSection, Container, Title, TitleSection, TitleWrapper } from "./styles";

export default function Projects(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        //axios.get(`${process.env.REACT_APP_BACKEND_HOST}/project`)
        axios.get('https://christianproject.com.br:3000/project')
        .then((response)=>{
            response.data.map(({attributes,attributeProject})=>{
                setData([...data, {...attributeProject, ...attributes}]);
            });
        });
    },[])
    
    return(
        <Container>
            <TitleSection>
                <TitleWrapper>
                    <Title>Projetos</Title>
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