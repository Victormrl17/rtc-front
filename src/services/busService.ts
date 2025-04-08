import { Bus } from '../types/bus';

const BASE_URL = 'http://localhost:8080';

export const getBuses = async (): Promise<Bus[]> => {
  const res = await fetch(`${BASE_URL}/bus`);
  if (!res.ok) {
    throw new Error('Error al obtener buses');
  }
  return res.json();
};
