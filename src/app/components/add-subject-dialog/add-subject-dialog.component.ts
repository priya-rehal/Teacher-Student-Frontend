import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Language } from 'src/app/models/language';
import { Standard } from 'src/app/models/standard';
import { Subject } from 'src/app/models/subject';
import { LanguageService } from 'src/app/services/language.service';
import { StandardService } from 'src/app/services/standard.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-subject-dialog',
  templateUrl: './add-subject-dialog.component.html',
  styleUrls: ['./add-subject-dialog.component.css']
})
export class AddSubjectDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddSubjectDialogComponent>);
  standards: Standard[] = [];
  languages: Language[] = [];
  subject: Subject = new Subject();

  constructor(private form: FormBuilder, private subjectService: SubjectService, @Inject(MAT_DIALOG_DATA) public data: { standard: Standard[], language: Language[] }) {
    console.log(data)
    this.standards = data.standard,
      this.languages = data.language
  }

  subjectForm = this.form.group({
    name: new FormControl('', Validators.compose([Validators.required])),
    standardId: new FormControl('', Validators.compose([Validators.required])),
    languageIds: this.form.array([], Validators.required) // Use FormArray for multi-select
  });

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  //To close the modal
  closeModel() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
  //To clear the form fields
  clear() {
    this.subjectForm.reset();
  }

  add() {
    if (this.subjectForm.valid) {
      this.subject.name = this.subjectForm.value.name ? this.subjectForm.value.name : '';
      this.subject.standardId = this.subjectForm.value.standardId ? this.subjectForm.value.standardId : '';
      this.subject.languageId = this.subjectForm.value.languageIds;
      if (this.subject) {
        this.subjectService.addSubject(this.subject).subscribe({
          next: (response: any) => {
            this.closeModel();
          },
          error: (error: any) => {

          }
        })
      }
    }
  }

  addLanguage(id: number, isChecked: boolean) {
    const languageFormArray = this.subjectForm.get('languageIds') as FormArray;

    if (isChecked) {
      if (!languageFormArray.value.includes(id)) {
        languageFormArray.push(new FormControl(id));
      }
    } else {
      const index = languageFormArray.controls.findIndex(x => x.value === id);
      if (index !== -1) {
        languageFormArray.removeAt(index);
      }
    }
  }

}
