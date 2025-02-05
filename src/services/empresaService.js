import axios from 'axios';

const API_URL = 'http://localhost:5000/api/empresa'; // Ajusta la URL según tu backend

export const buscarEmpresaPorNIT = async (nit) => {
  const response = await axios.get(`${API_URL}/${nit}`);
  return response.data;
};

export const obtenerTodasLasEmpresas = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};