import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Standard } from '../models/standard';
@Injectable({
  providedIn: 'root'
})
export class StandardService {

  constructor(private http: HttpClient) { }

  getStandard(): Observable<Standard[]> {
    return this.http.get<Standard[]>('https://localhost:7012/api/Standard');
  }

}
