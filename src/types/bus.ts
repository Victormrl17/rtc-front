export type Marca = {
    id: number;
    nombre: string;
  };
  
  export type Bus = {
    id: number;
    numeroBus: string;
    placa: string;
    fechaCreacion: string;
    caracteristicas: string;
    marca: Marca;
    activo: boolean;
  };
  