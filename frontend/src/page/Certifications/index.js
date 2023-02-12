import axios from "axios";
import { useEffect, useState } from "react";
import GenericCard from "../../components/GenericCard";
import { CardSection, Container, Title, TitleSection, TitleWrapper } from "./style";

export default function Certifications(){
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        //axios.get(`${process.env.REACT_APP_BACKEND_HOST}/certification`)
        axios.get("http://christianproject.com.br:3000/certification")
        .then((response)=>{
            response.data.forEach(({attributes, attributeCertification})=>{
                setData([...data, {...attributes, attributeCertification}]);
            });
        });
    },[]);

    return(
        <Container>
            <TitleSection>
                <TitleWrapper>
                    <Title>Certificações</Title>
                </TitleWrapper>
            </TitleSection>
            <CardSection>
                {data.map(({title, description, image, links},index)=>(
                    <GenericCard key={index} title={title} image={image} links={links} description={description}/>
                ))}
            </CardSection>
        </Container>
    );
}