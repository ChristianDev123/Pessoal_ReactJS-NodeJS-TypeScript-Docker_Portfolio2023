import { useState } from "react";
import GenericModal from "../GenericModal";
import { BlackMask, Container, Title } from "./styles";

export default function GenericCard({image,title}){
    const [isMouseEnter, setIsMouseEnter] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    return(
        <Container 
            image={image}
            onMouseEnter={()=>!isModalOpen&&setIsMouseEnter(true)}
            onMouseLeave={()=>setIsMouseEnter(false)}
            onClick={()=>!isModalOpen&&setIsModalOpen(true)}
        >
            <BlackMask activate={!isMouseEnter}>
                <Title>
                    {title}
                </Title>
            </BlackMask>
            {isMouseEnter && <GenericModal/>}
        </Container>
    );
}