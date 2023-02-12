import HomePage from './components/HomePage';
import Header from '../../components/Header';
import WorkExperience from './components/WorkExperience';
import Contacts from './components/Contacts';
import CertificatesFormation from './components/CertificatesFormation';
import MainSkillsProjects from './components/MainSkilsProjects';
import { useEffect, useState } from 'react';
import { Main } from './styles';

export default function MainPage(){
    const [scrollPosition, setScrollPosition] = useState(0);
    function handleScroll(){
        const position = window.scrollY;
        setScrollPosition(position);
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll,{ passive:true });
        return ()=>{window.removeEventListener('scroll',handleScroll)}
    },[]);

    return(
        <>
            <Header/>
            <Main scrollPosition={scrollPosition}>
                <HomePage/>
                <div id="experience">
                    <WorkExperience/>
                </div>
                <div id="contacts">
                    <Contacts/>
                </div>
                <div id="certificates-formations">
                    <CertificatesFormation/>
                </div>
                <div id="mainskills-projects">
                    <MainSkillsProjects/>
                </div>
            </Main>
        </>
    );
}