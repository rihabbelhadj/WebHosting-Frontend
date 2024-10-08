import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {apiConfig} from '../config/apiConfig';
import {Subject} from 'rxjs';
import {Service} from '../models/service';
import {Domaine} from '../models/domaine';
import {map} from 'rxjs/operators';
import {Payement} from '../models/payement';
import {Commande} from '../models/commande';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PayementService{
  public host = 'https://localhost:7086/api/Payement';
  userApi = apiConfig.apis.user;

  constructor(private _http: HttpClient) {
  }
  getAllPayement(): Observable<Payement[]> {
    return this._http.get<Payement[]>(this.host+'/GetAllDomaines');
  }

  getPayementByUserId(id:string):Observable<Payement[]>{
    return this._http.get<Payement[]>(this.host+'/GetPayement/ByUserId?userId='+id);
  }
  AddPayement(pay: Payement) {
    return this._http.post(this.host + '/create', pay);
  }

}
