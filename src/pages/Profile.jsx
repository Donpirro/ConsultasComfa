import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Perfil</h2>
      <p>Correo: {user?.email}</p>
      <p>Fecha de ingreso: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default Profile;