import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleados } from '../../models/empleados';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  empleados: Empleados[];

  goBack(): void {
    this.location.back();
  }


  constructor(private empleadoService: EmpleadosService, private location: Location) { }

  ngOnInit() {
      this.empleadoService.getEmpleados().then(empleados => this.empleados = empleados);
  }

}
