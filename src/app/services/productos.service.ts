import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Productos } from '../models/productos';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

    constructor(private http: Http) {}

    getProductos() {
        return this.http.get('/assets/data/productos.json')
                    .toPromise()
                    .then(res => <Productos[]> res.json().data)
                    .then(data =>   data );
    }
}
