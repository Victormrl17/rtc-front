import React, { useEffect, useState } from 'react';
import { Bus, Marca } from '../types';
import { createBus, updateBus, getMarcas } from '../api/api';

interface Props {
  selectedBus?: Bus;
  onSuccess: () => void;
}

const BusForm: React.FC<Props> = ({ selectedBus, onSuccess }) => {
  const [formData, setFormData] = useState<Partial<Bus>>(selectedBus || {});
  const [marcas, setMarcas] = useState<Marca[]>([]);

  useEffect(() => {
    getMarcas().then((res) => setMarcas(res.data as Marca[]));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'marca' ? { id: Number(value) } : name === 'activo' ? value === 'true' : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedBus) {
      await updateBus(selectedBus.id, formData);
    } else {
      await createBus(formData);
    }
    onSuccess();
    setFormData({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="numeroBus"
        value={formData.numeroBus || ''}
        onChange={handleChange}
        placeholder="Número de Bus"
        required
      />
      <input
        name="placa"
        value={formData.placa || ''}
        onChange={handleChange}
        placeholder="Placa"
        required
      />
      <input
        name="caracteristicas"
        value={formData.caracteristicas || ''}
        onChange={handleChange}
        placeholder="Características"
        required
      />
      <select name="marca" value={formData.marca?.id || ''} onChange={handleChange} required>
        <option value="">Seleccione una marca</option>
        {marcas.map((m) => (
          <option key={m.id} value={m.id}>
            {m.nombre}
          </option>
        ))}
      </select>
      <select name="activo" value={formData.activo ? 'true' : 'false'} onChange={handleChange} required>
        <option value="true">Activo</option>
        <option value="false">Inactivo</option>
      </select>
      <button type="submit">{selectedBus ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
};

export default BusForm;
