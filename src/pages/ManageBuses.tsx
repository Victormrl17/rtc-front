import React from 'react';
import { getBuses, deleteBus, getMarcas } from '../api/api';
import { Bus, Marca } from '../types';

class ManageBuses extends React.Component {
  state = {
    buses: [] as Bus[],
    marcas: [] as Marca[],
    selectedBus: null as Bus | null,
    isModalOpen: false,
  };

  componentDidMount() {
    this.fetchBuses();
    this.fetchMarcas();
  }

  fetchBuses = () => {
    getBuses().then((res) => this.setState({ buses: res.data as Bus[] }));
  };

  fetchMarcas = () => {
    getMarcas().then((res) => this.setState({ marcas: res.data as Marca[] }));
  };

  handleDelete = async (id: number) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este bus?')) {
      await deleteBus(id);
      this.fetchBuses();
    }
  };

  handleEdit = (bus: Bus) => {
    this.setState({ selectedBus: bus, isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ selectedBus: null, isModalOpen: false });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ selectedBus: null, isModalOpen: false });
    this.fetchBuses();
  };

  render() {
    const { buses, marcas, selectedBus, isModalOpen } = this.state;

    return (
      <div className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">⚙️ Editar o Eliminar Buses</h2>
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
              <th className="border border-gray-300 p-2">Acciones</th>
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
                <td className="border border-gray-300 p-2 flex gap-2">
                  <button
                    onClick={() => this.handleEdit(bus)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600 transition"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => this.handleDelete(bus.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

{isModalOpen && selectedBus && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-2xl relative">
      <button
        onClick={this.handleCloseModal}
        className="absolute top-2 right-2 bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600 transition"
      >
        ✕
      </button>
      <h3 className="text-xl font-bold mb-4 text-center">Editar Bus</h3>
      <table className="w-full border-collapse border border-gray-300 mb-6">
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
          <tr>
            <td className="border border-gray-300 p-2">{selectedBus.id}</td>
            <td className="border border-gray-300 p-2">{selectedBus.numeroBus}</td>
            <td className="border border-gray-300 p-2">{selectedBus.placa}</td>
            <td className="border border-gray-300 p-2">{new Date(selectedBus.fechaCreacion).toLocaleString()}</td>
            <td className="border border-gray-300 p-2">{selectedBus.caracteristicas}</td>
            <td className="border border-gray-300 p-2">{selectedBus.marca?.nombre}</td>
            <td className="border border-gray-300 p-2">{selectedBus.activo ? 'Activo' : 'Inactivo'}</td>
          </tr>
        </tbody>
      </table>
      <form onSubmit={this.handleSubmit} className="flex flex-col gap-4">
        <input
          name="numeroBus"
          defaultValue={selectedBus.numeroBus}
          placeholder="Número de Bus"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="placa"
          defaultValue={selectedBus.placa}
          placeholder="Placa"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="caracteristicas"
          defaultValue={selectedBus.caracteristicas}
          placeholder="Características"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="marca"
          defaultValue={selectedBus.marca?.id || ''}
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
          defaultValue={selectedBus.activo ? 'true' : 'false'}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="true">Activo</option>
          <option value="false">Inactivo</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  </div>
)}
      </div>
    );
  }
}

export default ManageBuses;
