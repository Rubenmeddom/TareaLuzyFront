import { Facturas } from "./Facturas";
export class Productos{
    productoid:number
    facturaid:Facturas
    codigoproducto:string
    stock:number
    constructor(productoid:number,facturaid:Facturas, codigoproducto:string,  stock:number){
    this.productoid=productoid;
    this.facturaid=facturaid;
    this.codigoproducto=codigoproducto;
    this.stock=stock;
    }
    }