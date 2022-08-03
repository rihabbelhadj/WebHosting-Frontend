import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {apiConfig} from '../config/apiConfig';
import {Subject} from 'rxjs';
import {Service} from '../models/service';
import {Domaine} from '../models/domaine';
import {map} from 'rxjs/operators';

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
export class DomaineService{
  public host = 'https://localhost:7086/api/Domain';
  userApi = apiConfig.apis.user;

  constructor(private _http: HttpClient) {
  }
  getAllDomaines(): Observable<Domaine[]> {
    return this._http.get<Domaine[]>(this.host+'/GetAllDomaines');
  }
  searchDomaine(query:string){
    return this._http.get<Domaine[]>(this.host+'/GetDomainesByTitle?title='+query)}

}
