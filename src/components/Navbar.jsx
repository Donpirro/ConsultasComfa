import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-red-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sistema de Créditos</h1>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
          <Link to="/profile" className="hover:text-gray-200">Perfil</Link>
          {user && <button onClick={logout} className="hover:text-gray-200">Cerrar Sesión</button>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;