import React, { useEffect, useState } from 'react';
import { obtenerTodasLasEmpresas } from '../services/empresaService';

const VerEmpresas = () => {
  const [empresas, setEmpresas] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        console.log("📌 Haciendo la solicitud de empresas...");
        const data = await obtenerTodasLasEmpresas();
        if (!Array.isArray(data)) throw new Error('Formato de datos incorrecto');
        setEmpresas(data);
      } catch (err) {
        console.error('Error al obtener las empresas:', err);
        setError('Error al obtener las empresas');
      }
    };
    fetchEmpresas();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Empresas</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {empresas.length > 0 ? (
          empresas.map((empresa) => (
            <li key={empresa.NitCorrecto}>
              {empresa.Empresa} - {empresa.NitCorrecto}
            </li>
          ))
        ) : (
          <p>No hay empresas registradas.</p>
        )}
      </ul>
    </div>
  );
};

export default VerEmpresas;
