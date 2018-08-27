import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Proveedores } from '../models/proveedores';
import { Http } from '@angular/http';

@Injectable()
export class ProveedoresService {

    constructor(private http: Http) {}

    getProveedores() {
        return this.http.get('/assets/data/proveedores.json')
                    .toPromise()
                    .then(res => <Proveedores[]> res.json().data)
                    .then(data =>   data );
    }
}
