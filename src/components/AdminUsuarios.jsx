import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
import api from '../api';

const AdminUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await api.get(`${API_URL}/admin/users`);
        setUsuarios(response.data);
      } catch (err) {
        setError('Error al obtener los usuarios');
      }
    };
    fetchUsuarios();
  }, []);

  const handleAssignPermissions = async (userId, permissions) => {
    try {
      await axios.post(`${API_URL}/admin/assign-permissions`, { userId, permissions });
      alert('Permisos asignados con éxito');
    } catch (err) {
      alert('Error al asignar permisos');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Usuarios</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.email} - {usuario.role}
            <button onClick={() => handleAssignPermissions(usuario.id, ['vendedor'])}>
              Asignar Permisos
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminUsuarios;