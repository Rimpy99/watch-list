import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './redux/reduxHooks';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {

  const isTokenCorrect = Boolean(useAppSelector((state) => state.user.token)) 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthPage/>}/>
          <Route path='/home' element={isTokenCorrect ? <HomePage/> : <Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;