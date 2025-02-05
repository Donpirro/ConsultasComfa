import React, { useState } from 'react';
import { buscarEmpresaPorNIT, obtenerTodasLasEmpresas } from '../services/empresaService';

const EmpresaComponent = () => {
  const [nit, setNit] = useState('');
  const [empresa, setEmpresa] = useState(null);
  const [empresas, setEmpresas] = useState([]);
  const [error, setError] = useState('');

  const handleBuscarEmpresa = async () => {
    try {
      const empresaEncontrada = await buscarEmpresaPorNIT(nit);
      console.log('📌 Empresa encontrada:', empresaEncontrada);
      setEmpresa(empresaEncontrada);
      setError('');
    } catch (err) {
      console.error('Error al buscar empresa:', err);
      setError('Empresa no encontrada');
      setEmpresa(null);
    }
  };

  const handleObtenerEmpresas = async () => {
    try {
      const todasLasEmpresas = await obtenerTodasLasEmpresas();
      console.log('📌 Empresas obtenidas:', todasLasEmpresas);
      setEmpresas(Array.isArray(todasLasEmpresas) ? todasLasEmpresas : []);
      setError('');
    } catch (err) {
      console.error('Error al obtener las empresas:', err);
      setError('Error al obtener las empresas');
      setEmpresas([]);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-100 shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-center mb-4">Buscar Empresa</h1>

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Ingrese el NIT"
          value={nit}
          onChange={(e) => setNit(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <button
          onClick={handleBuscarEmpresa}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
        >
          Buscar
        </button>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {empresa && (
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold">{empresa.Empresa}</h2>
          <p>NIT: {empresa.NitCorrecto || 'No disponible'}</p>
        </div>
      )}

      <div className="mt-6">
        <button
          onClick={handleObtenerEmpresas}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
        >
          Obtener Todas las Empresas
        </button>

        <ul className="mt-4">
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
    </div>
  );
};

export default EmpresaComponent;
