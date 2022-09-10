import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {apiConfig} from '../config/apiConfig';
import {Subject} from 'rxjs';
import {Service} from '../models/service';
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
export class ServicesService {
  public host = 'https://localhost:7086/api/Service';
  userApi = apiConfig.apis.user;

  constructor(private _http: HttpClient) {
  }
  getAllService(): Observable<Service[]> {
    return this._http.get<Service[]>(this.host+'/GetService');
  }

  addService(servobj: Service) :Observable<Service>{
    return this._http.post<Service>(this.host+'/AddService',servobj);
  }

  deleteService(serv: Service) :Observable<Service>{
    return this._http.delete<Service>(this.host+'/delete-by'+serv.idService);

  }

  updateService(servobj: Service):Observable<Service>{
    return this._http.put<Service>(this.host+'/update',servobj);

  }


}
