import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RubrosComponent } from './components/rubros/rubros.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ComprasComponent } from './components/compras/compras.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

const routes: Routes = [
  { path: 'rubros', component: RubrosComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'compras', component: ComprasComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'pedidos', component: PedidosComponent },
];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule],

  declarations: []
})
export class AppRoutingModule { }
