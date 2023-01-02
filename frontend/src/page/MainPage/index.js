import HomePage from './components/HomePage';
import Header from '../../components/Header';
import WorkExperience from './components/WorkExperience';
import Contacts from './components/Contacts';
import CertificatesFormation from './components/CertificatesFormation';
import MainSkillsProjects from './components/MainSkilsProjects';
export default function MainPage(){
    return(
        <>
            <Header/>
            <main>
                <HomePage/>
                <WorkExperience/>
                <Contacts/>
                <CertificatesFormation/>
                <MainSkillsProjects/>
            </main>
        </>
    );
}