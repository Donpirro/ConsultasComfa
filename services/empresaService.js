import api from './api';

export const empresaService = {
    async getEmpresa(id) {
        try {
            const response = await api.get(`/empresas/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async getAllEmpresas() {
        try {
            const response = await api.get('/empresas');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default empresaService; 