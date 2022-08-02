import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {apiConfig} from '../config/apiConfig';
import {Subject} from 'rxjs';
import {Service} from '../models/service';
import {Domaine} from '../models/domaine';
import {Serveur} from '../models/serveur';

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
export class ServeurService{
  public host = 'https://localhost:7086/api/Serveur';
  userApi = apiConfig.apis.user;

  constructor(private _http: HttpClient) {
  }
  getAllServeur(): Observable<Serveur[]> {
    return this._http.get<Serveur[]>(this.host+'/GetAllServeur');
  }
  addServeur(serv: Serveur):Observable<Serveur>{
    return this._http.post<Serveur>(this.host+'/create',serv);
  }
  updateServeur(serv:Serveur):Observable<Serveur>{
    return this._http.put<Serveur>(this.host+'/update',serv);
  }
  deleteServeur(serv:Serveur):Observable<Serveur>{
    return this._http.delete<Serveur>(this.host+'/delete-by'+serv.idServeur);
  }
}
