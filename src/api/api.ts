import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const getBuses = () => axios.get(`${API_BASE_URL}/bus`);
export const createBus = (bus: any) => axios.post(`${API_BASE_URL}/bus`, bus);
export const updateBus = (id: number, bus: any) => axios.put(`${API_BASE_URL}/bus/${id}`, bus);
export const deleteBus = (id: number) => axios.delete(`${API_BASE_URL}/bus/${id}`);

export const getMarcas = () => axios.get(`${API_BASE_URL}/marca`);
