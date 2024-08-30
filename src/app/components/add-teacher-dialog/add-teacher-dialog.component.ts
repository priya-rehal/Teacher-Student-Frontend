import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Teachers } from 'src/app/models/teachers';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-add-teacher-dialog',
  templateUrl: './add-teacher-dialog.component.html',
  styleUrls: ['./add-teacher-dialog.component.css']
})
export class AddTeacherDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddTeacherDialogComponent>);
  teacher: Teachers = new Teachers();
  genders: any[] = [{ value: 'Female' }, { value: 'Male' }];
  constructor(private form: FormBuilder, private teacherService: TeacherService) { }

  teacherForm = this.form.group({
    name: new FormControl('', Validators.compose([Validators.required])),
    age: new FormControl('', Validators.compose([Validators.required])),
    image: new FormControl(null, Validators.compose([Validators.required])),
    gender: new FormControl('', Validators.compose([Validators.required])),
  });

  addteacher() {
    if (this.teacherForm.valid) {
      this.teacher.name = this.teacherForm.value.name ? this.teacherForm.value.name : '';
      this.teacher.age = this.teacherForm.value.age ? this.teacherForm.value.age : 0;
      this.teacher.image = this.teacherForm.value.image ? this.teacherForm.value.image : '';
      this.teacher.gender = this.teacherForm.value.gender ? this.teacherForm.value.gender : '';
    }
    if (this.teacher) {
      this.teacherService.addTeacher(this.teacher).subscribe({
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
    this.teacherForm.reset();
  }
}
