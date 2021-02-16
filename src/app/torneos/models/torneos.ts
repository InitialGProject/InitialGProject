export interface Torneos {
    id: number;
    categorias_id: number;
    entrada_id: number;
    usuario_id: number;
    titulo: string;
    imagen: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFin: Date;
    CategoriaDesc: string;
    contenido: string;
    numparticipantes: number;
}
