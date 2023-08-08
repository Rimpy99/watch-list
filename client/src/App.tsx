import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthPage/>}/>
          <Route path='/home' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
