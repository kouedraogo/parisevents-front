import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

//const baseUrl = 'http://localhost:8080/api/events';
const baseUrl = 'https://back-nodejs-mongodb.herokuapp.com/api/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(baseUrl);
  }

  get(id: any): Observable<Event> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  findByTitle(title: any): Observable<Event[]> {
    return this.http.get<Event[]>(`${baseUrl}?title=${title}`);
  }
}
