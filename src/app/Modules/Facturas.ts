import { Contratos } from "./Contratos";
export class Facturas{
    facturaid:number
    contratosid:Contratos
    codigofactura:string
    constructor(facturaid:number,contratosid:Contratos, codigofactura:string){
    this.facturaid=facturaid;
    this.contratosid=contratosid;
    this.codigofactura=codigofactura;

    }
    }