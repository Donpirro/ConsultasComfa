import React, { useState } from 'react';
import axios from 'axios';

const BuscarEmpresa = () => {
  const [nit, setNit] = useState('');
  const [empresa, setEmpresa] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validarNit = (nit) => nit && nit.trim().length > 0;

  const buscarEmpresa = async (e) => {
    e.preventDefault();
    setError('');
    setEmpresa(null);

    if (!validarNit(nit)) {
      setError('El NIT es requerido');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`/api/empresa/${nit}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setEmpresa(response.data);
    } catch (error) {
      console.error('Error al buscar la empresa:', error);
      setError(error.response?.data?.message || 'Error al buscar la empresa');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Buscar Empresa por NIT</h2>
      <form onSubmit={buscarEmpresa} className="mb-4">
        <input
          type="text"
          placeholder="Ingrese el NIT"
          value={nit}
          onChange={(e) => setNit(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
        >
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {empresa && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Información de la Empresa</h3>
          <p><strong>Nombre:</strong> {empresa.Empresa || 'N/A'}</p>
          <p><strong>NIT:</strong> {empresa.NitCorrecto || 'N/A'}</p>
          <p><strong>Estado:</strong> {empresa.Estado || 'N/A'}</p>
          <p><strong>Representante Legal:</strong> {empresa.RepresentanteLegal || 'N/A'}</p>
          <p><strong>Teléfono:</strong> {empresa.Telefono || 'N/A'}</p>
          <p><strong>Correo:</strong> {empresa.Correo || 'N/A'}</p>
        </div>
      )}
    </div>
  );
};

export default BuscarEmpresa;
