import api from './api';

const authService = {
    async login(credentials) {
        try {
            const response = await api.post('/auth/login', credentials);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                // Configurar el token en los headers para futuras peticiones
                api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            }
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    logout() {
        localStorage.removeItem('token');
        delete api.defaults.headers.common['Authorization'];
    },

    getCurrentToken() {
        return localStorage.getItem('token');
    }
};

export default authService; 