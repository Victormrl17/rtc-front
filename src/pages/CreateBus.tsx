import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMarcas, createBus } from '../api/api';
import { Marca } from '../types';

const CreateBus: React.FC = () => {
  const navigate = useNavigate();
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const [formData, setFormData] = useState({
    numeroBus: '',
    placa: '',
    caracteristicas: '',
    marca: '',
    activo: true,
  });

  useEffect(() => {
    getMarcas().then((res) => setMarcas(res.data as Marca[]));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'activo' ? value === 'true' : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      marca: { id: Number(formData.marca) },
    };
    await createBus(payload);
    alert('Bus creado exitosamente');
    navigate('/');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">➕ Crear un nuevo Bus</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="numeroBus"
          value={formData.numeroBus}
          onChange={handleChange}
          placeholder="Número de Bus"
          required
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="placa"
          value={formData.placa}
          onChange={handleChange}
          placeholder="Placa"
          required
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="caracteristicas"
          value={formData.caracteristicas}
          onChange={handleChange}
          placeholder="Características"
          required
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="marca"
          value={formData.marca}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Seleccione una marca</option>
          {marcas.map((marca) => (
            <option key={marca.id} value={marca.id}>
              {marca.nombre}
            </option>
          ))}
        </select>
        <select
          name="activo"
          value={formData.activo ? 'true' : 'false'}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="true">Activo</option>
          <option value="false">Inactivo</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Crear
        </button>
      </form>

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

export default CreateBus;
