import { useEffect, useState } from "react";
import GenericModal from "../GenericModal";
import { Container, Description, Image, Title, WrapperDescription } from "./styles";

export default function GenericDescCard({image, title, description}){
    const [isMouseEnter, setIsMouseEnter] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    useEffect(()=>{
        setIsModalOpen(false);
    },[]);

    return(
        <Container 
            mouseEnter={isMouseEnter}
            onMouseEnter={()=>setIsMouseEnter(true)}
            onMouseLeave={()=>setIsMouseEnter(false)}
            onClick={()=>{!isModalOpen&&setIsModalOpen(true)}}
        >
            <Image src={image} mouseEnter={isMouseEnter}/>
            <WrapperDescription mouseEnter={isMouseEnter}>
                {isMouseEnter && <Title mouseEnter={isMouseEnter}>{title}</Title>}
                <Description mouseEnter={isMouseEnter}>
                    {description}
                </Description>
            </WrapperDescription>
            {isModalOpen && <GenericModal isOpen={setIsModalOpen} image={image} title={title} description={description} links={['teste','teste','teste']}/>}
        </Container>
    );
}

