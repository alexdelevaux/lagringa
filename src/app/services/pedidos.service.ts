import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Pedidos } from '../models/pedidos';
import { Http } from '@angular/http';

@Injectable()
export class PedidosService {
  
    constructor(private http: Http) {}

    getPedidos() {
        return this.http.get('/assets/data/pedidos.json')
                    .toPromise()
                    .then(res => <Pedidos[]> res.json().data)
                    .then(data =>   data );
    }
}
