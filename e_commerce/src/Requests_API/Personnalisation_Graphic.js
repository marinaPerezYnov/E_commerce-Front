import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your actual API URL

// Function to create a new personnalisation graphique
export const createPersonnalisationGraphique = async (data) => {
    const response = await axios.post(`${API_URL}/personnalisationGraphic`, data, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        }
    });
    return response.data;
};

// Function to get all personnalisation graphiques
export const getPersonnalisationGraphiques = async () => {
    const response = await axios.get(`${API_URL}/personnalisationGraphic`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        }
    });
    return response.data;
};

// Function to get a personnalisation graphique by ID
export const getPersonnalisationGraphiqueById = async (id) => {
    const response = await axios.get(`${API_URL}/personnalisationGraphic/${id}`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        }
    });
    return response.data;
};

// Function to get a personnalisation graphique by owner ID
export const getPersonnalisationGraphiqueByOwnerId = async (ownerId) => {
    const response = await axios.get(`${API_URL}/personnalisationGraphic/owner/${ownerId}`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        }
    });
    return response.data;
};

// Function to update a personnalisation graphique
export const updatePersonnalisationGraphique = async (id, data) => {
    const response = await axios.put(`${API_URL}/personnalisationGraphic/${id}`, data, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        }
    });
    return response.data;
};

// Function to delete a personnalisation graphique
export const deletePersonnalisationGraphique = async (id) => {
    const response = await axios.delete(`${API_URL}/personnalisationGraphic/${id}`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        }
    });
    return response.data;
};