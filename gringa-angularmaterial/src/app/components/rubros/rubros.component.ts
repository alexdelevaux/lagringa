import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rubros',
  templateUrl: './rubros.component.html',
  styleUrls: ['./rubros.component.css']
})



export class RubrosComponent implements OnInit {

  displayedColumns: string[] = ['idRubro', 'nombre'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  nombre: string;
  idRubro: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {idRubro: 1, nombre: 'Cereales' },
  {idRubro: 2, nombre: 'Harinas'},
  {idRubro: 3, nombre: 'Sin TACC' },
  {idRubro: 4, nombre: 'Bebibles'},
  {idRubro: 5, nombre: 'Naturales' },
  {idRubro: 6, nombre: 'Orgánico'},
  {idRubro: 7, nombre: 'Legumbres'},
  {idRubro: 8, nombre: 'Condimentos'},
  {idRubro: 9, nombre: 'Light'},
  {idRubro: 10, nombre: 'Snacks'},
];
