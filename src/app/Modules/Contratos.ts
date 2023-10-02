import { Clientes } from "./Clientes";
export class Contratos{
    contratoid:number
    clienteid:Clientes
    codigocontrato:string
    constructor(contratoid:number,clienteid:Clientes, codigocontrato:string){
    this.contratoid=contratoid;
    this.clienteid=clienteid;
    this.codigocontrato=codigocontrato;

    }
    }