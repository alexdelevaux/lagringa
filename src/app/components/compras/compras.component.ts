import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ComprasService } from '../../services/compras.service';
import { Compras } from '../../models/compras';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

  /* Valores del producto */



  columnas: any[];

  compras: Compras[];

  precioFilter: number;

  precioTimeout: any;

  es: any;


  /* CRUD */
  displayDialog: boolean;

  newCompra: boolean;

  comp: Compras;

  compraSeleccionada: Compras;




  goBack(): void {
    this.location.back();
  }


  constructor(private comprasService: ComprasService, private location: Location ) { }

  showDialogToAdd() {
    this.newCompra = true;

    this.displayDialog = true;
  }

  save() {
    const compras = [...this.compras];
    if (this.newCompra) {
      compras.push(this.comp);
    } else {
      compras[this.compras.indexOf(this.compraSeleccionada)] = this.comp;
    }

    this.compras = compras;
    const compJSON = JSON.stringify(compras);
    console.log(compJSON);
    this.comp = null;
    this.displayDialog = false;
  }


  ngOnInit() {

    this.comprasService.getCompras().then(compras => this.compras = compras);
    this.columnas = [
      { field: 'idCompra' , header: 'ID'},
      { field: 'idProveedor' , header: 'Proveedor'},
      { field: 'idPedido' , header: 'Nº Pedido'},
      { field: 'fechaCompra' , header: 'Fecha de compra'},
      { field: 'total' , header: 'Total'}
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
        dt.filter(event.value, 'total', 'gt');
    }, 250);
  }

}
