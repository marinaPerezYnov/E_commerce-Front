import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your actual API URL

export const login = async (email, password, navigate) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, {
            email,
            password
        });
        sessionStorage.setItem('token', response.data.access_token);
        sessionStorage.setItem('userId', response.data.user.id);
        navigate('/accueil');
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const register = async (email, password, navigate) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, {
            email,
            password
        });
        console.log('response from register :', response.data);
        navigate('/accueil');
        return response.data;
    } catch (error) {
        console.error('Error registering:', error);
        throw error;
    }
};