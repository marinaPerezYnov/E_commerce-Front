import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your actual API URL

export const createPersonnalisationGraphique = async (data) => {
    // intégrer le bearer token à la requête
    const response = await axios.post(`${API_URL}/personnalisationGraphic`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            contentType: 'application/json',
        }
    }, data);
    return response.data;
};

export const getPersonnalisationGraphiques = async () => {
    const response = await axios.get(`${API_URL}/personnalisationGraphic`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            contentType: 'application/json',
        }
    });
    return response.data;
};

export const getPersonnalisationGraphiqueById = async (id) => {
    const response = await axios.get(`${API_URL}/personnalisationGraphic/${id}`,{
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            contentType: 'application/json',
        }
    });
    return response.data;
};

export const getPersonnalisationGraphiqueByOwnerId = async (ownerId) => {
    const response = await axios.get(`${API_URL}/personnalisationGraphic/owner/${ownerId}`,{
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            contentType: 'application/json',
        }
    });
    return response.data;
}

export const updatePersonnalisationGraphique = async (id, data) => {
    const response = await axios.put(`${API_URL}/personnalisationGraphic/${id}`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            contentType: 'application/json',
        }
    }, data);
    return response.data;
};

export const deletePersonnalisationGraphique = async (id) => {
    const response = await axios.delete(`${API_URL}/personnalisationGraphic/${id}`,{
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            contentType: 'application/json',
        }
    });
    return response.data;
};