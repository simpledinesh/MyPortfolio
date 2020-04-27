import { Component, OnInit } from '@angular/core';
import { AppSettingService } from '../app-setting.service';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  public work: any;
  constructor(private appSettingService: AppSettingService) { }

  ngOnInit(): void {
    this.appSettingService.getJSON().subscribe(data => {
      this.work = data.work;
    });
  }

}
