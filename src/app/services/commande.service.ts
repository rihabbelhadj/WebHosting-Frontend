import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {apiConfig} from '../config/apiConfig';
import {Subject} from 'rxjs';
import {Service} from '../models/service';
import {Domaine} from '../models/domaine';
import {map} from 'rxjs/operators';
import {Serveur} from '../models/serveur';
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
export class CommandeService {
  public host = 'https://localhost:7086/api/Commande';
  userApi = apiConfig.apis.user;

  constructor(private _http: HttpClient) {
  }

  getAllCommande(): Observable<Commande[]> {
    return this._http.get<Commande[]>(this.host + '/GetAllCommandes');
  }
getByServiceId(id:string): Observable<Commande[]>{
  return this._http.get<Commande[]>(this.host+'/GetByServcieId?id='+id);
}
  deleteUser(user:User){
    return this._http.delete<User>(this.host+'/deleteUser?id='+user.id);

  }
  AddCommande(com: Commande) {
    return this._http.post(this.host + '/AddCommande', com);
  }
}
