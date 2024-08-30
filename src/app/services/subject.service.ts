import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject, SubjectResponse } from '../models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>('https://localhost:7012/api/Subject', subject);
  }

  getSubject(): Observable<SubjectResponse[]> {
    return this.http.get<SubjectResponse[]>('https://localhost:7012/api/Subject');
  }

}
