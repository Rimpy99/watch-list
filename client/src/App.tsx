import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './redux/reduxHooks';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import WatchListPage from './pages/WatchListPage';
import Navbar from './components/Navbar';
import SignOutConfirmation from './components/SingOutConfirmation';
import MovieDetails from './pages/MovieDetails';

function App() {

  const [ isSingOutModalActive, setIsSingOutModalActive ] = useState<boolean>(false);

  const isTokenCorrect = Boolean(useAppSelector((state) => state.user.token));

  useEffect(() => {
    if(isSingOutModalActive){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'unset';
    }
  }, [isSingOutModalActive])

  return (
    <div className="App">
      <BrowserRouter>
        {isTokenCorrect && <Navbar setIsSingOutModalActive={setIsSingOutModalActive}/>}
        <Routes>
          <Route path='/' element={<AuthPage/>}/>
          <Route path='/home' element={isTokenCorrect ? <HomePage/> : <Navigate to='/'/>}/>
          <Route path='/watchlist' element={isTokenCorrect ? <WatchListPage/> : <Navigate to='/'/>}/>
          <Route path='/movie/:id' element={isTokenCorrect ? <MovieDetails/> : <Navigate to='/'/>}/>
        </Routes>
        {
          isSingOutModalActive && <SignOutConfirmation setIsSingOutModalActive={setIsSingOutModalActive}/>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;