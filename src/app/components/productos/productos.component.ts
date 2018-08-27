import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../models/productos';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  /* Valores del producto */
  idProducto: number;
  producto: string;
  estado = 'Activo';
  precioVenta: number;
  fechaActualizacion: string;
  observaciones: string;


  columnas: any[];

  estados: SelectItem[];

  productos: Productos[];

  precioFilter: number;

  precioTimeout: any;

  es: any;


  /* CRUD */
  displayDialog: boolean;

  newProducto: boolean;

  prod: Productos;

  prodSeleccionado: Productos;




  goBack(): void {
    this.location.back();
  }


  constructor(private productosService: ProductosService, private location: Location ) { }

  showDialogToAdd() {
    this.newProducto = true;

    this.displayDialog = true;
  }

  save() {
    const productos = [...this.productos];
    if (this.newProducto) {
      productos.push(this.prod);
    } else {
      productos[this.productos.indexOf(this.prodSeleccionado)] = this.prod;
    }

    this.productos = productos;
    const prodJSON = JSON.stringify(productos);
    console.log(prodJSON);
    this.prod = null;
    this.displayDialog = false;
  }

  ngOnInit() {
    console.log(this.productos);
    this.productosService.getProductos().then(productos => this.productos = productos);
    this.columnas = [
      { field: 'idProducto' , header: 'ID'},
      { field: 'producto' , header: 'Producto'},
      { field: 'estado' , header: 'Estado'},
      { field: 'precioVenta' , header: 'Precio Venta'},
      { field: 'fechaActualizacion' , header: 'Última actualización'},
      { field: 'observaciones' , header: 'Observaciones'}
    ];
    this.estados = [
      {label: 'Todos', value: null},
      {label: 'Activo', value: 'Activo'},
      {label: 'Inactivo', value: 'Inactivo'},
    ];
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ 'domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado' ],
      dayNamesShort: [ 'dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb' ],
      dayNamesMin: [ 'D', 'L', 'M', 'X', 'J', 'V', 'S' ],
      monthNames: [ 'enero', 'febrero', 'marzo', 'abril', 'mayo',
      'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre' ],
      monthNamesShort: [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ],
      today: 'Hoy',
      clear: 'Borrar'
    };


  }

  onPrecioChange(event, dt) {
    if (this.precioTimeout) {
        clearTimeout(this.precioTimeout);
    }

    this.precioTimeout = setTimeout(() => {
        dt.filter(event.value, 'precioVenta', 'gt');
    }, 250);
}

}
