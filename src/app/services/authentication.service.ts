import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import {User} from '../models/user';
import {BehaviorSubject} from 'rxjs';
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
export class AuthenticationService {

  private _loggedUser = new BehaviorSubject<User>({});
  public loggedUser = this._loggedUser.asObservable();

 public host = 'https://localhost:7086/api/Users/Login';
  public jwt: string;
  private email: string;
  public firstName: string;
  public lastName: string;
  private roles: Array<string>;
  // tslint:disable-next-line:variable-name
  public convertToUser_ = false;
  constructor(private httpClient: HttpClient) {
    try {
      this.loadToken();
    } catch (error) {
      console.log(error);
    }

  }

  public login(userName : string, password: string) {
    // return this.httpClient.post(this.host + '/login', data, { observe: 'response' });
    // @ts-ignore
    const body = {
      UserName: userName,
      Password: password,
    }
    return this.httpClient.post(this.host, body);
    //  localStorage.setItem('role', localStorage.getItem('user'));


  }
  public setLoggedUser = (user: User) => {
    this._loggedUser.next(user);
  }

  public saveToken(jwt) {
    localStorage.setItem('token', jwt);
    localStorage.setItem('isconvert', String(this.convertToUser_));
    this.jwt = jwt;
    this.parseJWT();
  }

  parseJWT() {
    let jwtHelper = new JwtHelperService();
    let objJwt = jwtHelper.decodeToken(this.jwt);
    this.email = objJwt.sub;
    console.log(this.email);
    this.getUserByEmail(this.email).subscribe
    (
      data=>{
          this.firstName=data["firstname"];
          this.lastName=data["lastname"];
          console.log(data);
      },
      err=>{
        console.log("error");
      }
    );
    console.log(this.email);
    this.roles = objJwt.roles;
    if (this.convertToUser_) {
      this.convertToUser();
    }

  }


  convertToUser() {
    const index = this.roles.indexOf('ADMIN', 0);
    if (index > -1) {
      this.roles.splice(index, 1);
    }
  }
  onlyAdmin() {
    if (!this.isAdmin()) {
      this.logOut();
      return false;
    }
    return true;
  }

  isAdmin() {
    return this.roles.indexOf('ADMIN') >= 0;
  }

  isUser() {
    return this.roles.indexOf('USER') >= 0;
  }

  isAuthentificated() {
    return this.roles != undefined;
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.convertToUser_ = (localStorage.getItem('isconvert') == 'true');
    this.parseJWT();
  }
  logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
    localStorage.removeItem('UserDetail');
    this.initParams();
  }

  initParams() {
    this.jwt = undefined;
    this.email = undefined;
    this.roles = undefined;
  }

  getAllUsers() {
    let headers = new HttpHeaders({ 'authorization': 'Bearer' + this.jwt });
    return this.httpClient.get(this.host + '/users', { headers: headers });
  }
  getUserByEmail(email) {
    let headers = new HttpHeaders({ 'authorization': 'Bearer' + this.jwt });
    return this.httpClient.get(this.host + '/users/search/byEmail?email='+email, { headers: headers });
  }
  getAllRoles() {
    let headers = new HttpHeaders({ 'authorization': 'Bearer' + this.jwt });
    return this.httpClient.get(this.host + '/appRoles', { headers: headers });
  }

  public getRessource(url) {
    let headers = new HttpHeaders({ 'authorization': 'Bearer' + this.jwt });
    return this.httpClient.get(url, { headers: headers });
  }
  public postRessource(url, data) {
    let headers = new HttpHeaders({ 'authorization': 'Bearer' + this.jwt });
    return this.httpClient.post(url, data, { headers: headers });
  }

  public deleteRessource(url) {
    let headers = new HttpHeaders({ 'authorization': 'Bearer' + this.jwt });
    return this.httpClient.delete(url, { headers: headers });
  }


}
