import { Component, OnInit } from '@angular/core';
import { AppSettingService } from '../app-setting.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public education: any;
  constructor(private appsettingService: AppSettingService) { }

  ngOnInit(): void {
    this.appsettingService.getJSON().subscribe(data => {
      this.education = data.education;
    });
  }

}
