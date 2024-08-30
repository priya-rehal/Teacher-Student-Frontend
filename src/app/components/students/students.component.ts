import { Component, inject, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Students } from 'src/app/models/students';
import { StudentService } from 'src/app/services/student.service';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Paging } from 'src/app/models/paging';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  @ViewChild(MatSort) sort!: MatSort;
  pageSizeOptions = [2, 4, 8];
  pageDetails: Paging = new Paging();
  length: number = 0;
  pageIndex: number = 0;
  searchItem: string = "";

  constructor(private studentService: StudentService) { }

  students: any;
  displayColumns: string[] = ['index', 'name', 'age', 'image', 'standardId', 'rollNumber'];
  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddStudentDialogComponent, {
    }).afterClosed().subscribe({
      next: (response: any) => { this.getStudents() }
    })
  }
  ngOnInit(): void {
    this.getStudents();
  }
  getStudents() {
    this.studentService.GetStudents(this.pageDetails.pageNumber, this.pageDetails.pageSize, this.pageDetails.searchItem).subscribe({
      next: (response: any) => {
        this.students = new MatTableDataSource<Students>(response.data.data);
      },
      error: (error: any) => {
        this.students = [];
      }
    })
  }
  sortUsers(sort: Sort) {
    const data = this.students.slice();
    if (!sort.active || sort.direction === '') {
      this.students = data;
      return;
    }
  }
  selectPageSize(page: any) {
    if (page) {
      this.pageDetails.pageSize = page.pageSize;
      this.pageDetails.pageNumber = page.pageIndex;
      this.getStudents();
    }
  }
  searchUser() {
    if (this.searchItem) {
      this.pageDetails.searchItem = this.searchItem;
      this.getStudents();
    }
    else {
      this.pageDetails.searchItem = this.searchItem;
      this.getStudents();
    }
  }
}
