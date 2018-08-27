import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Empleados } from '../models/empleados';
import { Http } from '@angular/http';

@Injectable()
export class EmpleadosService {

    constructor(private http: Http) {}

    getEmpleados() {
        return this.http.get('/assets/data/empleados.json')
                    .toPromise()
                    .then(res => <Empleados[]> res.json().data)
                    .then(data =>   data );
    }
}
