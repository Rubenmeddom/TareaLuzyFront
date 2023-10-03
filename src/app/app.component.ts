import { Component } from '@angular/core';
import { BasededatosService } from './basededatos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tarea';
  private clienteId = 1;
  private csvContent: string | null = null;

  constructor(private servicio: BasededatosService) {}

  generarCSV() {
    const nombresClientes = ['Cliente1', 'Cliente2', 'Cliente3'];
    const numContratosPorCliente = 2;
    const numFacturasPorContrato = 3;
    const numProductosPorFactura = 4;

    let csvContent = 'Cliente,Nombre,Contrato,Factura,Producto,Material de Oficina,Stock\n';
    const materialesOficina = [
      'Lápiz', 'Bolígrafo', 'Cuaderno', 'Papel', 'Clip',
      'Grapadora', 'Tijeras', 'Borrador', 'Calculadora', 'Marcador'
    ];

    for (const nombreCliente of nombresClientes) {
      for (let contratoId = 1; contratoId <= numContratosPorCliente; contratoId++) {
        const contratoCodigo = `CK-${Math.floor(1000 + Math.random() * 9000)}`;
        for (let facturaId = 1; facturaId <= numFacturasPorContrato; facturaId++) {
          const facturaCodigo = `FH-${Math.floor(100 + Math.random() * 900)}`;
          for (let productoId = 1; productoId <= numProductosPorFactura; productoId++) {
            const productoCodigo = `PD-${Math.floor(100000 + Math.random() * 900000)}`;
            const materialOficina = materialesOficina[Math.floor(Math.random() * materialesOficina.length)];
            const stock = Math.floor(1 + Math.random() * 20);

            csvContent += `${this.clienteId},${nombreCliente},${contratoCodigo},${facturaCodigo},${productoCodigo},${materialOficina},${stock}\n`;
          }
        }
        this.clienteId++;
      }
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'datos.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      this.csvContent = e.target?.result as string;
    };

    reader.readAsText(file);
  }

  parseCSV() {
    if (this.csvContent) {
      const lines = this.csvContent.split('\n');

      for (const line of lines) {
        const [clienteid, nombre, contratoId, facturaid, productoid, stock] = line.split(',');

        const clienteidNumber = parseInt(clienteid, 10);
        const cliente :any ={clienteid,nombre}
        const contrato: any = { contratoId, facturas: [] };
        const factura: any = { facturaid, productos: [] };
        const producto: any = { productoid, stock };

        this.servicio.agregarCliente(cliente);
        this.servicio.agregarContrato(contrato);
        this.servicio.agregarFactura(factura);
        this.servicio.agregarProducto(producto);
      }
    } else {
      console.error('No se ha cargado ningún archivo CSV.');
    }
  }
}
