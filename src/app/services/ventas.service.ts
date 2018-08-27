import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Ventas } from '../models/ventas';
import { Http } from '@angular/http';

@Injectable()
export class VentasService {
  
    constructor(private http: Http) {}

    getVentas() {
        return this.http.get('/assets/data/ventas.json')
                    .toPromise()
                    .then(res => <Ventas[]> res.json().data)
                    .then(data =>   data );
    }
}
