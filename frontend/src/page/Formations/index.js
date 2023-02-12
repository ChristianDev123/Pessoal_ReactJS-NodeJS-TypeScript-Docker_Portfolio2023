import axios from "axios";
import { useEffect, useState } from "react";
import GenericDescCard from "../../components/GenericDescCard";
import { CardSection, Container, Title, TitleSection, TitleWrapper } from "./styles";

export default function Formations(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        //axios.get(`${process.env.REACT_APP_BACKEND_HOST}/formation`);
        axios.get("http://christianproject.com.br:3000/formation")
        .then((response)=>{
            response.data.forEach(({attributes, attributeFormations})=>setData([...data,{...attributes, ...attributeFormations}]));
        });
    },[]);

    return(
        <Container>
            <TitleSection>
                <TitleWrapper>
                    <Title>Formações</Title>
                </TitleWrapper>
            </TitleSection>
            <CardSection>
                {data.map(({title, description, mainImage}, index)=>(
                    <GenericDescCard key={index} title={title} description={description} image={mainImage}/>
                ))}
            </CardSection>
        </Container>
    );
}