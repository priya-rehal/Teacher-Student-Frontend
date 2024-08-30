import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentsComponent } from './components/students/students.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { StudentSubjectTeacherComponent } from './components/student-subject-teacher/student-subject-teacher.component';

const routes: Routes = [
  { path: 'teacher', component: TeacherComponent },
  { path: 'student', component: StudentsComponent },
  { path: 'subject', component: SubjectsComponent },
  { path: 'studentSubjectTeacher', component: StudentSubjectTeacherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
