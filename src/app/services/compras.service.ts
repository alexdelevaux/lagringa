import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Compras } from '../models/compras';
import { Http } from '@angular/http';

@Injectable()
export class ComprasService {

    constructor(private http: Http) {}

    getCompras() {
        return this.http.get('/assets/data/compras.json')
                    .toPromise()
                    .then(res => <Compras[]> res.json().data)
                    .then(data =>   data );
    }
}
