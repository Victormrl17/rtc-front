export interface Marca {
    id: number;
    nombre: string;
  }
  
  export interface Bus {
    id: number;
    numeroBus: string;
    placa: string;
    caracteristicas: string;
    fechaCreacion: string; 
    activo: boolean;
    marca: Marca;
  }
