import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthPage/>}/>
          {/* <Route/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
