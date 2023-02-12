import { Contact, Container, Image, Link, Wrapper } from "./styles";
import Phone from '../../../../assets/phone.svg';
import Gmail from '../../../../assets/gmail.svg';
import Linkedin from '../../../../assets/linkedin.svg';
import Github from '../../../../assets/github.svg';
import Title from "../../../../components/Title";

export default function Contacts(){
    const links = [
        {image: Phone, name:"011 94842-3153"},
        {image: Gmail, name:"christian.lima999@gmail.com", link:'mailto:christian.lima999@gmail.com'},
        {image: Linkedin, name:"/in/christian-santana-developer", link:'linkedin.com/in/christian-santana-developer'},
        {image: Github, name:"github.com/ChristianDev123", link:'github.com/ChristianDev123'},
    ]
    return(
        <>
            <Title msg="Contatos"/>
            <Container>
                <Wrapper>
                    {links.map(({image, name, link},index)=>(
                        <Contact key={index}>
                            <Image src={image}/>
                            <Link href={`https://${link}`} target="_blank">{name}</Link>
                        </Contact>
                    ))}
                </Wrapper>
            </Container>
        </>
    );
}