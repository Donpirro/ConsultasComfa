import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-red-600 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo y título */}
        <Link to="/" className="text-2xl font-bold text-white flex items-center space-x-3">
          
          <span>Sistema de Créditos COMFANORTE</span>
        </Link>

        {/* Botón de hamburguesa en móviles */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú principal */}
        <div className={`md:flex md:items-center md:space-x-6 ${menuOpen ? 'block' : 'hidden'} w-full md:w-auto text-center md:text-left`}>
          <Link to="/" className="block py-2 px-4 text-white hover:bg-red-700 rounded-md transition duration-300 ease-in-out">Home</Link>
      
          <Link to="/profile" className="block py-2 px-4 text-white hover:bg-red-700 rounded-md transition duration-300 ease-in-out">Perfil</Link>

          {user ? (
            <div className="flex flex-col md:flex-row md:items-center">
              <span className="text-white font-medium px-4">{user.name}</span>
              <button 
                onClick={logout} 
                className="bg-white text-red-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition duration-300 ease-in-out"
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <Link to="/dashboard" className="bg-white text-red-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition duration-300 ease-in-out">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
