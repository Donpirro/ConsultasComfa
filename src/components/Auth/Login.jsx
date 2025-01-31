import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode"; // Para decodificar el token JWT

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    console.log(response); // Verifica la estructura de la respuesta en la consola

    // Decodifica el token JWT para obtener la información del usuario
    const decodedToken = jwtDecode(response.credential);
    const email = decodedToken.email;

    if (email) {
      login({ email }); // Guarda el correo en el contexto de autenticación
      navigate('/dashboard'); // Redirige al dashboard
    } else {
      console.error('No se pudo obtener el correo electrónico del token de Google');
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