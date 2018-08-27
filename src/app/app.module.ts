import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {TabMenuModule} from 'primeng/tabmenu';
import {ToolbarModule} from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { CalendarModule } from 'primeng/calendar';
import { KeyFilterModule } from 'primeng/keyfilter';
import {RadioButtonModule} from 'primeng/radiobutton';



import { AppComponent } from './app.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TabViewModule} from 'primeng/tabview';
import { TablatestComponent } from './components/tablatest/tablatest.component';
import { BarranavComponent } from './components/barranav/barranav.component';
import { RubrosComponent } from './components/rubros/rubros.component';
import { AppRoutingModule } from './app-routing.module';
import {PanelMenuModule} from 'primeng/panelmenu';


import { RubrosService } from './services/rubros.service';
import { EmpleadosService } from './services/empleados.service';
import { ProveedoresService } from './services/proveedores.service';
import { ProductosService } from './services/productos.service';

import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ComprasComponent } from './components/compras/compras.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ComprasService } from './services/compras.service';
import { VentasService } from './services/ventas.service';
import { PedidosService } from './services/pedidos.service';




@NgModule({
    declarations: [
        AppComponent,
        TablatestComponent,
        BarranavComponent,
        RubrosComponent,
        EmpleadosComponent,
        ProveedoresComponent,
        ProductosComponent,
        ComprasComponent,
        VentasComponent,
        PedidosComponent,
    ],
    imports: [
        ToolbarModule,
        BreadcrumbModule,
        TabViewModule,
        BrowserModule,
        HttpModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        TabMenuModule,
        AppRoutingModule,
        PanelMenuModule,
        DropdownModule,
        SliderModule,
        CalendarModule,
        KeyFilterModule,
        RadioButtonModule
    ],
    providers: [
        RubrosService,
        ProveedoresService,
        EmpleadosService,
        ProductosService,
        ComprasService,
        VentasService,
        PedidosService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
