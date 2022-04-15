import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) {}

  public login(user) {
    const url = environment.baseUrl + AppSettings.login;
    return this.http.post(url, user);
  }
}
