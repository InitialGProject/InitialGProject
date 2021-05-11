export interface Facturas {
    id: number;
    id_usuario: number;
    fecha_compra: Date;
    enviado: boolean;
    fecha_envio: Date;
    total: number;
}
