import React, { useEffect, useState } from 'react';
import { Marca } from '../types';
import { getMarcas } from '../api/api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MarcaPage: React.FC = () => {
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const [nombre, setNombre] = useState('');
  const [editingMarca, setEditingMarca] = useState<Marca | null>(null);
  const navigate = useNavigate(); 

  const fetchMarcas = () => {
    getMarcas().then((res) => setMarcas(res.data as Marca[]));
  };

  useEffect(() => {
    fetchMarcas();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingMarca) {
      await axios.put(`http://localhost:8080/marca/${editingMarca.id}`, { nombre });
    } else {
      await axios.post(`http://localhost:8080/marca`, { nombre });
    }
    setNombre('');
    setEditingMarca(null);
    fetchMarcas();
  };

  const handleEdit = (marca: Marca) => {
    setNombre(marca.nombre);
    setEditingMarca(marca);
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:8080/marca/${id}`);
    fetchMarcas();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Gestión de Marcas</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre de la marca"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          {editingMarca ? 'Actualizar' : 'Crear'}
        </button>
      </form>

      <ul className="space-y-4">
        {marcas.map((marca) => (
          <li
            key={marca.id}
            className="flex justify-between items-center p-4 border border-gray-200 rounded-md shadow-sm"
          >
            <span className="font-medium">{marca.nombre}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(marca)}
                className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600 transition"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(marca.id)}
                className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>


      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate('/')} 
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          ⬅️ Regresar al Home
        </button>
      </div>
    </div>
  );
};

export default MarcaPage;
