import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-barranav',
  templateUrl: './barranav.component.html',
  styleUrls: ['./barranav.component.scss']
})
export class BarranavComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
            label: 'Navegar',
                icon: 'pi pi-pw pi-file',
                items: [
                    {
                      label: 'Rubros',
                      icon: 'pi pi-fw pi-plus',
                      routerLink: '/rubros',
                    },
                    {
                      label: 'Empleados',
                      icon: 'pi pi-fw pi-plus',
                      routerLink: '/empleados'
                    },
                    {
                      label: 'Proveedores',
                      icon: 'pi pi-fw pi-plus',
                      routerLink: '/proveedores'
                    },
                    {
                      label: 'Productos',
                      icon: 'pi pi-fw pi-plus',
                      routerLink: '/productos'
                    },
                    {
                      label: 'Compras',
                      icon: 'pi pi-fw pi-plus',
                      routerLink: '/compras'
                    },
                    {
                      label: 'Pedidos',
                      icon: 'pi pi-fw pi-plus',
                      routerLink: '/pedidos'
                    },
                    {
                      label: 'Ventas',
                      icon: 'pi pi-fw pi-plus',
                      routerLink: '/ventas'
                    }
                ]
            }

        ];


      }

    }

