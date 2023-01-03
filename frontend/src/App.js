import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import MainPage from './page/MainPage';
import Formations from './page/Formations';
export default function App(){
  return(
    <>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/formations' element={<Formations/>}/>
      </Routes>
    </>
  );
}