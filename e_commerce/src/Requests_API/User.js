import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your actual API URL

// Function to change the password of the user
export const changePassword = async (id, data) => {
    const response = await axios.put(`${API_URL}/user/${id}/change-password`, data, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        }
    });
    return response.data;
};

// Function to update the email of the user
export const updateEmail = async (id, data) => {
    const response = await axios.put(`${API_URL}/user/${id}/update-email`, data, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        }
    });
    return response.data;
};

// Function to delete the account of the user and all datas in each table who contains the ownerId
export const deleteAccount = async (id) => {
    const response = await axios.delete(`${API_URL}/user/${id}`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        }
    });
    return response.data;
};