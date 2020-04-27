import { Component, OnInit, OnChanges } from '@angular/core';
import { AppSettingService } from '../app-setting.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public user: any = {
    name: '',
    description: ''
  };
  public about: any = {
    name: '',
    description: ''
  };
  public skills: any;

  constructor(private appsettingService: AppSettingService) { }

  ngOnChanges(): void {

  }

  ngOnInit(): void {
    this.appsettingService.getJSON().subscribe(data => {
      this.user = data.user;
      this.about = data.about;
      this.skills = data.skills;
    });
  }

}
