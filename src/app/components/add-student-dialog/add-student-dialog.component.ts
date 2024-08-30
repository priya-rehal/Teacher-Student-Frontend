import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Standard } from 'src/app/models/standard';
import { Students } from 'src/app/models/students';
import { StandardService } from 'src/app/services/standard.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.css']
})
export class AddStudentDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddStudentDialogComponent>);
  standards: Standard[] = [];
  student: Students = new Students();

  studentForm = this.form.group({
    name: new FormControl('', Validators.compose([Validators.required])),
    age: new FormControl('', Validators.compose([Validators.required])),
    image: new FormControl(null, Validators.compose([Validators.required])),
    standard: new FormControl('', Validators.compose([Validators.required])),
    rollNumber: new FormControl('', Validators.compose([Validators.required])),
  });
  fileData: any;

  constructor(private form: FormBuilder, private standardService: StandardService, private studentService: StudentService) {
  }
  ngOnInit(): void {
    this.GetStandards();
  }
  GetStandards() {
    this.standardService.getStandard().subscribe({
      next: (response: any) => {
        if (response.data) {
          this.standards = response.data;
        }
      }
    })
  }

  addStudent() {
    if (this.studentForm.valid) {
      this.student.name = this.studentForm.value.name ? this.studentForm.value.name : '';
      this.student.age = this.studentForm.value.age ? this.studentForm.value.age : 0;
      this.student.image = this.studentForm.value.image ? this.studentForm.value.image : '';
      this.student.standardId = this.studentForm.value.standard ? this.studentForm.value.standard : 0;
      this.student.rollNumber = this.studentForm.value.rollNumber ? this.studentForm.value.rollNumber : '';
    }
    if (this.student) {
      this.studentService.AddStudent(this.student).subscribe({
        next: (response: any) => {
          console.log(response);
          this.closeModel();
        },
        error: (error: any) => {

        }
      });
    }
  }
  //To close the modal
  closeModel() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
  //To clear the form fields
  clear() {
    this.studentForm.reset();
  }

}
