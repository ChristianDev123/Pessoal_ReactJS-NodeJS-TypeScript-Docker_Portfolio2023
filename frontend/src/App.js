import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import MainPage from './page/MainPage';
export default function App(){
  return(
    <>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </>
  );
}