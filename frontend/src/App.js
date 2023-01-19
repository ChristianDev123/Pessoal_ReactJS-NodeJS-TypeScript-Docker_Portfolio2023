import { Route, Routes, useLocation } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import MainPage from './page/MainPage';
import Formations from './page/Formations';
import Certifications from './page/Certifications';
import MainSkills from './page/MainSkills';
import Projects from './page/Projects';

export default function App(){
  const location  = useLocation();
  return(
    <>
      <GlobalStyle/>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/formations' element={<Formations/>}/>
        <Route path="/certifications" element={<Certifications/>}/>
        <Route path="/mainskills" element={<MainSkills/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </>
  );
}