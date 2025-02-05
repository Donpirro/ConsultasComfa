import api from './api';
import { jwtDecode } from 'jwt-decode';

const authService = {
    async login(credentials) {
        try {
            const response = await api.post('/auth/login', credentials);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                
                // Decodificar el token para obtener los datos del usuario
                const decodedToken = jwtDecode(response.data.token);
                const userData = {
                    email: decodedToken.email,
                    name: decodedToken.name,
                    picture: decodedToken.picture,
                };
                localStorage.setItem('user', JSON.stringify(userData));

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
        localStorage.removeItem('user');
        delete api.defaults.headers.common['Authorization'];
    },

    getCurrentToken() {
        return localStorage.getItem('token');
    },

    getCurrentUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }
};

export default authService;
