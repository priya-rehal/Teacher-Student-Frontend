import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teachers } from '../models/teachers';
import { SubjectTeacher } from '../models/subjectTeacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  getTeachers(): Observable<Teachers> {
    return this.http.get<Teachers>('https://localhost:7012/api/Teacher');
  }
  addTeacher(teacher: Teachers): Observable<Teachers> {
    return this.http.post<Teachers>('https://localhost:7012/api/Teacher', teacher)
  }

  addTeacherSubject(subjectTeacher: SubjectTeacher): Observable<SubjectTeacher> {
    return this.http.post<SubjectTeacher>('https://localhost:7012/api/Teacher/AssignSubjectToTeacher', subjectTeacher);
  }
}

