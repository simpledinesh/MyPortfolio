import { Component, OnInit, Input } from '@angular/core';
import { AppSettingService } from '../app-setting.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public user: any = {
    name: '',
    description: ''
  };
  public role: any = {
    name: '',
    description: ''
  };
  public todayNumber: number = Date.now();

  constructor(private appsettingService: AppSettingService) { }

  ngOnInit(): void {
    this.appsettingService.getJSON().subscribe(data => {
      this.user = data.user;
      this.role = data.userRole;
    });
  }

}
