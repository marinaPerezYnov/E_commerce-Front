import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your actual API URL

export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/produits`,  {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error getting products:', error);
        throw error;
    }
};

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/produits/${id}`,  {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            }
        });
        console.log('response =>', response.data);
        return response.data;
    } catch (error) {
        console.error('Error getting product by id:', error);
        throw error;
    }
};

export const addProduct = async (product) => {
    try {
        const response = await axios.post(`${API_URL}/produits`, product,  {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            }
        });
        console.log('response =>', response.data);
        return response.data;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

export const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`${API_URL}/produits/${id}`, product,  {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/produits/${id}`,  {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};
