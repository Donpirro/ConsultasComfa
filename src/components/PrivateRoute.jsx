import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Verifica si el usuario está autenticado (puedes usar tu lógica real aquí)
  const isAuthenticated = localStorage.getItem('token'); // O cualquier lógica para verificar autenticación.

  // Si no está autenticado, redirige a la página de login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Si está autenticado, renderiza el contenido (hijos)
  return children;
};

export default PrivateRoute;
