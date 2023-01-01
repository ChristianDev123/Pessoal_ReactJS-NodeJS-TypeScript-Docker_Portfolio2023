import { Container, Button } from './style';

export default function Header(){
    const links = [
        {name:'Experiências Profissionais', link:'#experience'},
        {name:'Certificados', link:'#certificates-formations'},
        {name:'Formações', link:'#certificates-formations'},
        {name:'Principais Habilidades', link:'#mainskills-projects'},
        {name:'Projetos', link:'#mainskills-projects'},
    ];
    return(
        <Container>
            {links.map(({name, link})=>(
                <Button href={link}>
                    {name}
                </Button>
            ))}
        </Container>
    );
}