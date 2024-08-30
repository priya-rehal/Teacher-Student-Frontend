import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Language } from 'src/app/models/language';
import { Subject, SubjectResponse } from 'src/app/models/subject';
import { LanguageService } from 'src/app/services/language.service';
import { AddSubjectDialogComponent } from '../add-subject-dialog/add-subject-dialog.component';
import { SubjectService } from 'src/app/services/subject.service';
import { StandardService } from 'src/app/services/standard.service';
import { Standard } from 'src/app/models/standard';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {

  subject: SubjectResponse[] = [];
  standards: Standard[] = [];
  languages: Language[] = [];
  subjects: any;
  displayColumns = ['index', 'name', 'standard', 'subjectLanguages.language'];

  constructor(private subjectService: SubjectService, private standardService: StandardService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.getSubjects();
    this.getLanguages();
    this.GetStandards();
  }
  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddSubjectDialogComponent, {
      data: { standard: this.standards, language: this.languages },
    }).afterClosed().subscribe({
      next: (response: any) => { this.getSubjects() }
    })
  }
  //Get Standards
  GetStandards() {
    this.standardService.getStandard().subscribe({
      next: (response: any) => {
        if (response.data) {
          this.standards = response.data;
        }
      }
    })
  }
  getLanguages() {
    this.languageService.getLanguage().subscribe({
      next: (response: any) => {
        this.languages = response.data;
      },
      error: (error: any) => {

      }
    })
  }
  getSubjects() {
    this.subjectService.getSubject().subscribe({
      next: (response: any) => {
        console.log(response)
        this.subjects = new MatTableDataSource<SubjectResponse>(response.data);
      },
      error: (error: any) => {
      }
    });
  }
  sortUsers(sort: Sort) {
    const data = this.subjects.slice();
    if (!sort.active || sort.direction === '') {
      this.subjects = data;
      return;
    }
  }
}
