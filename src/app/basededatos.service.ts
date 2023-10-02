import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from './Modules/Clientes';
import { Contratos } from './Modules/Contratos';
import { Facturas } from './Modules/Facturas';
import { Productos } from './Modules/Productos';
@Injectable({
  providedIn: 'root'
})
export class BasededatosService {
  Urlclientes: string = "http://localhost:4200/clientes";
  Urlcontratos: string = "http://localhost:4200/contratos";
  Urlfacturas: string = "http://localhost:4200/facturas";
  Urlproductos: string = "http://localhost:4200/productos";
  constructor(private http: HttpClient) { }
  listarClientes(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.Urlclientes);
  }
  listarContratos(): Observable<Contratos[]> {
    return this.http.get<Contratos[]>(this.Urlcontratos);
  }
  listarFacturas(): Observable<Facturas[]> {
    return this.http.get<Facturas[]>(this.Urlfacturas);
  }
  listarProductos(): Observable<Productos[]> {
      return this.http.get<Productos[]>(this.Urlproductos);
  }



  agregarClientes(clientes: Clientes): Observable<any> {
    const url = this.Urlclientes+"/agregarClientes";
    console.log(url, clientes);
    return this.http.post(url, clientes);
  }
  agregarContratos(contratos: Contratos): Observable<any> {
    const url = this.Urlcontratos+"/agregarContratos";
    console.log(url, contratos);
    return this.http.post(url, contratos);
  }
  agregarFacturas(facturas: Facturas): Observable<any> {
    const url = this.Urlfacturas+"/agregarFacturas";
    console.log(url, facturas);
    return this.http.post(url, facturas);
  }
  agregarProductos(productos: Productos): Observable<any> {
    const url = this.Urlproductos+"/agregarProductos";
    console.log(url, productos);
    return this.http.post(url, productos);
  }



  obtenerClientesId(clienteid: number): Observable<number> {
    return this.http.get<number>(`${this.Urlclientes}/obtenerClientesId?clienteid=${clienteid}`);
  }
  findContratos(clienteid:number): Observable<Contratos[]> {
    return this.http.get<Contratos[]>(`${this.Urlcontratos}/contrato/${clienteid}`);
  }
  findFacturas(clienteid:number,contratoid:number): Observable<Facturas[]> {
    return this.http.get<Facturas[]>(`${this.Urlfacturas}/factura/${clienteid}/${contratoid}}`);
  }
  findProductos(clienteid:number,contratoid:number,facturaid:number): Observable<Productos[]> {
    return this.http.get<Productos[]>(`${this.Urlproductos}/producto/${clienteid}/${contratoid}/${facturaid}`);
  }
}
