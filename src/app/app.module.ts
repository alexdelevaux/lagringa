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

import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TabViewModule} from 'primeng/tabview';




@NgModule({
    declarations: [
        AppComponent,
        TabsComponent
    ],
    imports: [
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
        TabMenuModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }
