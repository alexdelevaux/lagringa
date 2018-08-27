import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Rubros } from '../models/rubros';
import { Http } from '@angular/http';

@Injectable()
export class RubrosService {

    constructor(private http: Http) {}

    getRubros() {
        return this.http.get('/assets/data/rubros.json')
                    .toPromise()
                    .then(res => <Rubros[]> res.json().data)
                    .then(data =>   data );
    }
}
