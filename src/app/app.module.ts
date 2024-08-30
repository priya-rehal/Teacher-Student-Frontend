import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/students/students.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AddStudentDialogComponent } from './components/add-student-dialog/add-student-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AddTeacherDialogComponent } from './components/add-teacher-dialog/add-teacher-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { AddSubjectDialogComponent } from './components/add-subject-dialog/add-subject-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StudentSubjectTeacherComponent } from './components/student-subject-teacher/student-subject-teacher.component';
import { AssignSubjectDialogComponent } from './components/assign-subject-dialog/assign-subject-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentsComponent,
    TeacherComponent,
    SubjectsComponent,
    AddStudentDialogComponent,
    AddTeacherDialogComponent,
    AddSubjectDialogComponent,
    StudentSubjectTeacherComponent,
    AssignSubjectDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
