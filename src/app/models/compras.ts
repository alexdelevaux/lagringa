export interface Compras {
    idCompra: number;
    idProveedor: number;
    idPedido: number | null;
    fechaCompra: string;
    total: number;
}
