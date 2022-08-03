import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {apiConfig} from '../config/apiConfig';
import {Subject} from 'rxjs';

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
export class UserService {
  public host = 'https://localhost:7086/api/Users';
  userApi = apiConfig.apis.user;
  constructor(private _http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.host+'/getUsers');
  }
  addUsers(user:User){
    return this._http.post(this.host+'/Register',user);
  }
  /*deleteUser(id : Guid){
    return this._http.delete(this.host+'/deleteUser/'+id);
  }*/
  updateUser(user:User){
    return this._http.put(this.host+'/update',user);
  }
  deleteUser(user:User){
    return this._http.delete<User>(this.host+'/deleteUser?id='+user.id);

  }

  private  _listners = new Subject<any>();
  listen(): Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy : string){
    this._listners.next(filterBy);
  }
  getCompanyById(companyId: string | null): Observable<User> {
    return this._http.get<User>(`${this.userApi}/byId?id=${companyId}`);
  }

  getUserByUserId(id:string): Observable<User> {
    return this._http.get<User>(this.host+'/byId?id='+id);
  }

 /* createCompany(newCompany: User): Observable<User> {

    return this._http.post<User>(`${this.userApi}/create?companyId=${newCompany.companyId}&business=${newCompany.business}&establishmentDate=${newCompany.establishmentDate}&profileDescription=${newCompany.profileDescription}&isValid=true&companyName=${newCompany.companyName}&userId=${newCompany.userId}&localisation=${newCompany?.localisation}`, {});
  }

  updateCompany(updatedCompany: User): Observable<User> {

    return this._http.put<User>(`${this.userApi}/update?companyId=${updatedCompany.companyId}&business=${updatedCompany.business}&establishmentDate=${updatedCompany.establishmentDate}&profileDescription=${updatedCompany.profileDescription}&isValid=true&companyName=${updatedCompany.companyName}&companyUrl=${updatedCompany.companyUrl}&localisation=${updatedCompany?.localisation}`, {});
  }

  deleteCompany(companyId: number | undefined): Observable<User> {

    return this._http.delete<User>(`${this.userApi}/delete?CompanyId=${companyId}`);
  }*/

}
