import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

// const AUTH_API = 'http://localhost:8080/api/auth/';
//const AUTH_API = 'https://project-back-isika.herokuapp.com/api/auth/';
const AUTH_API = 'https://paris-event.herokuapp.com/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(AUTH_API  + 'users');
  }

  get(id: any): Observable<User> {
    return this.http.get(`${AUTH_API + 'users'}/${id}`);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${AUTH_API + 'users'}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(AUTH_API + 'users');
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${AUTH_API + 'users'}/${id}`, data);
  }
}