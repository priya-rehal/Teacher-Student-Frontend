import { Component, SimpleChanges } from '@angular/core';
import { Standard } from 'src/app/models/standard';
import { Students } from 'src/app/models/students';
import { StudentSubject } from 'src/app/models/studentSubject';
import { SubjectResponse } from 'src/app/models/subject';
import { SubjectTeacher } from 'src/app/models/subjectTeacher';
import { StandardService } from 'src/app/services/standard.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-subject-teacher',
  templateUrl: './student-subject-teacher.component.html',
  styleUrls: ['./student-subject-teacher.component.css']
})
export class StudentSubjectTeacherComponent {
  constructor(private classes: StandardService, private studentService: StudentService) { }
  standards: Standard[] = [];
  students: Students[] = [];
  studentSubject: StudentSubject[] = [];
  selectedClass: number = 0;

  ngOnInit(): void {
    this.getStandard();
  }

  getStandard() {
    this.classes.getStandard().subscribe({
      next: (response: any) => {
        this.standards = response.data;
      }
    })
  }
  getStudents(classId: number, className: any) {
    this.selectedClass = className;
    if (this.students.length != 0) { this.students = []; this.studentSubject = [] }
    this.studentService.GetStudentsByClass(classId).subscribe({
      next: (response: any) => { this.students = response.data }
      ,
      error: (error: any) => {
        this.students = [];
      }
    });
  }
  getSubjectTeacher(standardId: number) {
    if (standardId) {
      this.studentService.GetStudentsSubjectTeacher(standardId).subscribe({
        next: (response: any) => {
          console.log(response.data);
          this.studentSubject = response.data;
        }
      })
    }
  }
}
