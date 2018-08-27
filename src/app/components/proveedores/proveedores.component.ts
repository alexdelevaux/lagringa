import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProveedoresService } from '../../services/proveedores.service';
import { Proveedores } from '../../models/proveedores';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {

  columnas: any[];

  proveedores: Proveedores[];

  goBack(): void {
    this.location.back();
  }


  constructor(private proveedoresService: ProveedoresService, private location: Location ) { }

  ngOnInit() {
    this.proveedoresService.getProveedores().then(proveedores => this.proveedores = proveedores);
    this.columnas = [
      { field: 'idProveedor' , header: 'ID'},
      { field: 'razonSocial' , header: 'Proveedor'},
      { field: 'CUIT' , header: 'CUIT'},
      { field: 'telefono' , header: 'Telefono'},
      { field: 'direccion' , header: 'Dirección'},
      { field: 'estado' , header: 'Estado'},
      { field: 'observaciones' , header: 'Observaciones'}
    ];
  }

}
