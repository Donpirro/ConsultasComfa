import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSuccess = (response) => {
    try {
      const decoded = jwtDecode(response.credential);
      const userData = {
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
        token: response.credential // Guardar token completo si lo necesitas para API
      };
      
      login(userData);
      navigate('/dashboard');
      //lo siguiente es para comfanorte
      // Opcional: Redirigir a página anterior o ruta protegida
      // const from = location.state?.from?.pathname || '/dashboard';
      // navigate(from, { replace: true });
      
    } catch (error) {
      console.error('Error procesando login:', error);
      // Manejar error adecuadamente
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <div className="mt-6">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => console.log('Error en autenticación de Google')}
            useOneTap // Opcional: Activar one-tap login
            auto_select // Opcional: Selección automática de cuenta
          />
        </div>
      </div>
    </div>
  );
};

export default Login;