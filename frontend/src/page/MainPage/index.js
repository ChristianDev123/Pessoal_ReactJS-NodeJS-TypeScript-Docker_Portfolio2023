import HomePage from './components/HomePage';
import Header from '../../components/Header';
import WorkExperience from './components/WorkExperience';
export default function MainPage(){
    return(
        <>
            <Header/>
            <main>
                <HomePage/>
                <WorkExperience/>
            </main>
        </>
    );
}