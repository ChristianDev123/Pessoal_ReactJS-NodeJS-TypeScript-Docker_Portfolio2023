import { useState } from "react";
import GenericModal from "../GenericModal";
import { BlackMask, Container, Title } from "./styles";

export default function GenericCard({image, title, links, description}){
    const [isMouseEnter, setIsMouseEnter] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    return(
        <Container 
            image={image}
            onMouseEnter={()=>!isModalOpen&&setIsMouseEnter(image&&true)}
            onMouseLeave={()=>setIsMouseEnter(false)}
            onClick={()=>!isModalOpen&&setIsModalOpen(true)}
        >
            <BlackMask activate={!isMouseEnter}>
                <Title>
                    {title}
                </Title>
            </BlackMask>
            {isModalOpen && <GenericModal image={image} description={description} links={links} title={title} isOpen={setIsModalOpen}/>}
        </Container>
    );
}