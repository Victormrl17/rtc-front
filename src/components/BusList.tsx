import React, { useEffect, useState } from 'react';
import { getBuses } from '../api/api';
import { Bus } from '../types';

const BusList: React.FC = () => {
  const [buses, setBuses] = useState<Bus[]>([]);

  useEffect(() => {
    getBuses().then((res) => setBuses(res.data as Bus[]));
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Lista de Buses</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Número de Bus</th>
            <th className="border border-gray-300 p-2">Placa</th>
            <th className="border border-gray-300 p-2">Fecha de Creación</th>
            <th className="border border-gray-300 p-2">Características</th>
            <th className="border border-gray-300 p-2">Marca</th>
            <th className="border border-gray-300 p-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((bus) => (
            <tr key={bus.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2">{bus.id}</td>
              <td className="border border-gray-300 p-2">{bus.numeroBus}</td>
              <td className="border border-gray-300 p-2">{bus.placa}</td>
              <td className="border border-gray-300 p-2">{new Date(bus.fechaCreacion).toLocaleString()}</td>
              <td className="border border-gray-300 p-2">{bus.caracteristicas}</td>
              <td className="border border-gray-300 p-2">{bus.marca?.nombre}</td>
              <td className="border border-gray-300 p-2">{bus.activo ? 'Activo' : 'Inactivo'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusList;
