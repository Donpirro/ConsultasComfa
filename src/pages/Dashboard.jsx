import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const [nit, setNit] = useState('');

  const handleConsult = () => {
    console.log('Consultando NIT:', nit);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Bienvenido, {user?.email}</h2>
      <div className="mt-4">
        <p>{user?.email === 'admin@example.com' ? 'Eres un administrador. Puedes gestionar todo.' : 'Eres un vendedor. Solo puedes ver información.'}</p>
      </div>
      
      <div className="mt-6 p-4 border rounded shadow-md">
        <h3 className="text-lg font-bold">Consultar NIT de Empresa</h3>
        <input 
          type="text" 
          placeholder="Ingrese el NIT" 
          value={nit} 
          onChange={(e) => setNit(e.target.value)}
          className="border p-2 mt-2 w-full"
        />
        <button onClick={handleConsult} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Consultar</button>
      </div>
    </div>
  );
};

export default Dashboard;