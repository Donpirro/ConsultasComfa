import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightCircle } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Contenedor con sombra y fondo blanco */}
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg text-center">
        
        {/* Logo desde URL */}
        <img 
          src="https://comfanorte.com.co/index/wp-content/uploads/2019/04/LogoWebsite.png" 
          alt="Comfanorte Logo" 
          className="w-28 mx-auto mb-4 animate-fade-in" 
          loading="lazy"
        />

        {/* Título principal */}
        <h2 className="text-3xl font-bold text-red-600 animate-slide-up">
          Bienvenido al Sistema de Créditos de Comfanorte
        </h2>

        {/* Separador */}
        <hr className="my-4 border-gray-300 w-3/4 mx-auto" />

        {/* Texto descriptivo */}
        <p className="text-lg text-gray-700 animate-fade-in">
          Estimado asesor, Este sistema le permite consultar información
           sobre empresas con acuerdos de servicio, asi como las carteras y sus trabajadores con creditos prospectados. Explore las funcionalidades disponibles para optimizar su gestión financiera.
        </p>

        {/* Botón con icono */}
        <button 
          onClick={() => navigate('/dashboard')} 
          className="mt-6 flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition transform hover:scale-105 animate-bounce"
        >
          Explorar
          <ArrowRightCircle className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
};

export default Home;
