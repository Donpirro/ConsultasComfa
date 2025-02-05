import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
      <img 
            src="https://comfanorte.com.co/index/wp-content/uploads/2019/04/LogoWebsite.png" 
            alt="Logo" 
            className="w-38 h-12 mr-2 transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:border-2 hover:border-white" 
            loading="lazy"
          />
        <p>&copy; 2025 Sistema de Créditos COMFANORTE. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;