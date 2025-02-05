import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Applications from './pages/Applications';
import BuscarEmpresa from './components/BuscarEmpresa';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="applications" element={<Applications />} />
          <Route path="buscar-empresa" element={<BuscarEmpresa />} />
        </Route>

        {/* Rutas de Autenticación */}
        <Route path="/auth" element={<AuthLayout />}>
        <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
