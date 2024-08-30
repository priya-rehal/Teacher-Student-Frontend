import { Component, inject, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Teachers } from 'src/app/models/teachers';
import { TeacherService } from 'src/app/services/teacher.service';
import { AddTeacherDialogComponent } from '../add-teacher-dialog/add-teacher-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AssignSubjectDialogComponent } from '../assign-subject-dialog/assign-subject-dialog.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  @ViewChild(MatSort) sort!: MatSort;

  teachers: any;
  displayColumns: string[] = ['index', 'name', 'age', 'image', 'gender', 'action'];
  readonly dialog = inject(MatDialog);

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.getTeachers();
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddTeacherDialogComponent, {
    }).afterClosed().subscribe({
      next: (response: any) => { this.getTeachers() }
    })
  }
  openAssignSubjectDialog(teacherId: number, teacherName: string): void {
    this.dialog.open(AssignSubjectDialogComponent, {
      data: { teacherId: teacherId, teacherName: teacherName }
    }).afterClosed().subscribe({
      next: (response: any) => { this.getTeachers() }
    })
  }
  getTeachers() {
    this.teacherService.getTeachers().subscribe({
      next: (response: any) => {
        console.log(response);
        this.teachers = new MatTableDataSource<Teachers>(response.data);
      }, error: (error: any) => {
      }
    })
  }
  sortUsers(sort: Sort) {
    const data = this.teachers.slice();
    if (!sort.active || sort.direction === '') {
      this.teachers = data;
      return;
    }
  }
}
