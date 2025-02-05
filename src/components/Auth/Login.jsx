import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Para decodificar el token JWT

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const responseGoogle = (response) => {
    console.log("Token recibido:", response);
    try {
      const decodedToken = jwtDecode(response.credential);
      console.log("Token decodificado:", decodedToken);

      const { email, name, picture } = decodedToken;
      if (email) {
        login({ email, name, picture });
        navigate('/dashboard'); // Redirige a dashboard
      } else {
        console.error('No se pudo obtener el correo electrónico del token de Google');
      }
    } catch (error) {
      console.error('Error al decodificar el token:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <div className="mt-6">
          <GoogleLogin
            onSuccess={responseGoogle}
            onError={() => console.log('Error al iniciar sesión con Google')}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
