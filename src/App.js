import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ={'/'} element={<Login method='post'/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
