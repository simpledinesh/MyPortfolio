import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppSettingService {

  constructor(private _http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }
  public getJSON(): Observable<any> {
    return this._http.get("./assets/mydata.json");
  }
}
