import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experience = '';

  constructor(private dataService: DataService) {
    this.experience = this.dataService.getExperience();
  }
}
