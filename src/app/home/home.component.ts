import { Component, OnInit } from '@angular/core';
import { AppSettingService } from '../app-setting.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user: any = {
    name: '',
    description: ''
  };
  public role: any = {
    name: '',
    description: ''
  };
  constructor(private appsettingService: AppSettingService) { }

  ngOnInit(): void {
    this.appsettingService.getJSON().subscribe(data => {
      this.user = data.user;
      this.role = data.userRole;
    });
  }

}
