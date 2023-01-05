import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import MainPage from './page/MainPage';
import Formations from './page/Formations';
import Certifications from './page/Certifications';
export default function App(){
  return(
    <>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/formations' element={<Formations/>}/>
        <Route path="/certifications" element={<Certifications/>}/>
      </Routes>
    </>
  );
}