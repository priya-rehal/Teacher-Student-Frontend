import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from '../models/students';
import { SubjectResponse } from '../models/subject';
import { StudentSubject } from '../models/studentSubject';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  GetStudentsByClass(classId: number): Observable<Students[]> {
    return this.http.get<Students[]>(`https://localhost:7012/api/Student/GetStudentByClass?classId=${classId}`);
  }
  GetStudentsSubjectTeacher(classId: number): Observable<StudentSubject[]> {
    return this.http.get<StudentSubject[]>(`https://localhost:7012/api/Student/GetSubjectAndTeacherByStudent?classId=${classId}`);
  }
  GetStudents(pageNumber: number, pageSize: number, searchItem: string): Observable<Students[]> {
    return this.http.get<Students[]>(`https://localhost:7012/api/Student?pageNumber=${pageNumber}&pageSize=${pageSize}&searchItem=${searchItem}`);
  }

  AddStudent(student: Students): Observable<Students> {
    return this.http.post<Students>('https://localhost:7012/api/Student', student);
  }
}

