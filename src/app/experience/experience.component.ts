import { Component, OnInit } from '@angular/core';
import { AppSettingService } from '../app-setting.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public experience: any;
  constructor(private appsettingService: AppSettingService) { }

  ngOnInit(): void {
    this.appsettingService.getJSON().subscribe(data => {
      this.experience = data.experience;
    });
  }

}
