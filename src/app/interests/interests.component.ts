import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent {
  interests = '';

  constructor(private dataService: DataService) {
    this.interests = this.dataService.getInterests();
  }
}