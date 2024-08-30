import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { SubjectResponse } from 'src/app/models/subject';
import { SubjectTeacher } from 'src/app/models/subjectTeacher';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-assign-subject-dialog',
  templateUrl: './assign-subject-dialog.component.html',
  styleUrls: ['./assign-subject-dialog.component.css']
})
export class AssignSubjectDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AssignSubjectDialogComponent>);

  subjectTeacher: SubjectTeacher = new SubjectTeacher();
  subjects: SubjectResponse[] = [];
  constructor(private subjectService: SubjectService, private subjectTeacherService: TeacherService, private form: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: { teacherId: number, teacherName: string }) {
    this.teacherForm.patchValue({ teacher: data.teacherName });
  }

  ngOnInit(): void {
    this.getSubjects();
  }
  teacherForm = this.form.group({
    teacher: new FormControl('', Validators.compose([Validators.required])),
    subjectId: new FormControl('', Validators.compose([Validators.required])),
  });

  getSubjects() {
    this.subjectService.getSubject().subscribe({
      next: (response: any) => {
        console.log(response)
        this.subjects = response.data;
      },
      error: (error: any) => {
      }
    });
  }
  //To close the modal
  closeModel() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
  addteacher() {
    if (this.teacherForm.valid) {
      this.subjectTeacher.teacherId = this.data.teacherId;
      this.subjectTeacher.subjectId = this.teacherForm.value.subjectId ? this.teacherForm.value.subjectId : 0;
    }
    this.subjectTeacherService.addTeacherSubject(this.subjectTeacher).subscribe({
      next: (response: any) => {
        this.closeModel();
      }
      ,
      error: (error: any) => {
      }
    })
  }
}
