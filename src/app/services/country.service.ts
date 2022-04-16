import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppSettings } from '../app.settings';
import { Country } from '../home/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) {}

  public login(user) {
    const url = environment.baseUrl + AppSettings.login;
    return this.http.post(url, user);
  }

  public getAllCountries() {
    const url = environment.baseUrl + AppSettings.getAllCountries;
    const token = atob(localStorage.getItem('isLogin'));
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token': token
      })
    };
    return this.http.get(url, httpOptions);
  }
}
