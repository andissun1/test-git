import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Table from './components/Table/Table.jsx';
import { Forms } from './components/Forms/Forms.jsx';
import { AuthForm } from './components/Forms/AuthForm.jsx';
import { Login } from './components/Forms/Login.jsx';
import { Navbar } from './components/Navbar/navbar.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/auth" element={<AuthForm />} />
      <Route path="/table" element={<Table />} />
    </Routes>
  </BrowserRouter>
);
