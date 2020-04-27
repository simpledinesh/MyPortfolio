import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AppSettingService } from '../app-setting.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  mailFrom: FormGroup;
  public user: any = {
    email: '',
    phone: '',
    address: ''
  }
  public submitted: boolean = false;
  constructor(private appsettingService: AppSettingService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.mailFrom = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(75)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(75)]],
      subject: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(75)]],
      message: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(300)]],
    });
    this.appsettingService.getJSON().subscribe(data => {
      this.user = data.user;
    });
  }
  get mailControl() { return this.mailFrom.controls; }

  onSubmit() {
    console.log(this.mailFrom.value);
    this.mailFrom.reset();
  }

}
