import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubjectTeacherComponent } from './student-subject-teacher.component';

describe('StudentSubjectTeacherComponent', () => {
  let component: StudentSubjectTeacherComponent;
  let fixture: ComponentFixture<StudentSubjectTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentSubjectTeacherComponent]
    });
    fixture = TestBed.createComponent(StudentSubjectTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
