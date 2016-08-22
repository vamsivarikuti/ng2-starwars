import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SwapiResponse } from './swapi-response';
import { Observable } from 'rxjs/Rx';
import { Person } from '../people/shared/person';


const SWAPI_URL = 'http://swapi.co/api/';


@Injectable()
export class SwapiService {

  constructor(private http: Http) {
  }

  getPeople(): Observable<SwapiResponse> {
    return this.http.get(SWAPI_URL + 'people')
      .map(d => d.json());
  }

  getPersonById(id: number): Observable<Person> {
    return this.http.get(SWAPI_URL + 'people/' + id)
      .map(d => d.json());
  }

  getDataByUrl(url: string): Observable<SwapiResponse> {
    return this.http.get(url)
      .map(d => d.json());
  }

}


