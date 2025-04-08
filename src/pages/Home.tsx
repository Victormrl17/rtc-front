import React from 'react';
import { useNavigate } from 'react-router-dom';
import BusList from '../components/BusList';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Gestión de Buses</h1>
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
        <button
          onClick={() => navigate('/marcas')}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Ir a gestión de marcas
        </button>
        <button
          onClick={() => navigate('/crear-bus')}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
        >
          ➕ Crear nuevo Bus
        </button>
        <button
          onClick={() => navigate('/gestionar-buses')}
          className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition"
        >
          ⚙️ Editar / Eliminar Buses
        </button>
      </div>
      <BusList />
    </div>
  );
};

export default Home;
