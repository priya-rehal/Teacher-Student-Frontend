import { Component, Input } from '@angular/core';
import { Standard } from 'src/app/models/standard';
import { StandardService } from 'src/app/services/standard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  classId: number = 0;
  constructor(private standardService: StandardService) { }

  standards: Standard[] = [];

  ngOnInit(): void {
    this.GetStandards();
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

  getStudents(Id: number) {
    if (Id) {
      this.classId = Id;
    }
  }
}
