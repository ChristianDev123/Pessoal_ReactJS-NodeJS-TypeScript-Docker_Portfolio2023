import { useState } from "react";
import GenericModal from "../GenericModal";
import { Container, Description, Image, Title, WrapperDescription } from "./styles";

export default function GenericDescCard({image, title, description}){
    const [isMouseEnter, setIsMouseEnter] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return(
        <Container 
            mouseEnter={isMouseEnter}
            onMouseEnter={()=>setIsMouseEnter(!modalIsOpen)}
            onMouseLeave={()=>setIsMouseEnter(false)}
            onClick={()=>setModalIsOpen(true)}
        >
            <Image src={image} mouseEnter={isMouseEnter}/>
            <WrapperDescription mouseEnter={isMouseEnter}>
                {isMouseEnter && <Title mouseEnter={isMouseEnter}>{title}</Title>}
                <Description mouseEnter={isMouseEnter}>
                    {description}
                </Description>
            </WrapperDescription>
            {/* {modalIsOpen &&} */}
            <GenericModal image={image} title={title} description={description} links={['teste','teste','teste']}/>
        </Container>
    );
}

