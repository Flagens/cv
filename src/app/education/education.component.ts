
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education = '';

  constructor(private dataService: DataService) {
    this.education = this.dataService.getEducation();
  }
}