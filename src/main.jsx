import { createRoot } from 'react-dom/client';
import './index.css';
import Table from './components/Table/Table.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Forms } from './components/Forms/Forms.jsx';
import { AuthForm } from './components/Forms/AuthForm.jsx';
import { Login } from './components/Forms/Login.jsx';
import { Navbar } from './components/navbar/navbar.jsx';

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
