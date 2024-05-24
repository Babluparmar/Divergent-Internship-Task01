import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, Router } from "react-router-dom";
import Login from './pages/login_page/Login';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login_page" />} />
          <Route path="/login_page" element={<Login />} />
          <Route path="home" element={<Home />} />
        </Routes>  
    </BrowserRouter>
  );
}

export default App;
