import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Scrapping } from '../models/scrapping.model';

//const baseUrl = 'http://localhost:8080/api/scrappings';
const baseUrl = 'https://back-nodejs-mongodb.herokuapp.com/api/scrappings';

@Injectable({
  providedIn: 'root'
})
export class ScrappingService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Scrapping[]> {
    return this.http.get<Scrapping[]>(baseUrl);
  }

  get(id: any): Observable<Scrapping> {
    return this.http.get(`${baseUrl}/${id}`);
  }
}
