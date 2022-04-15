import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppSettings } from '../app.settings';
import { Country } from '../home/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countries: Country[] = [
    {
      city: 'Kabul',
      region: 'Kabul',
      country: 'Afghanistan',
      aqi: '15.42105263',
      population: '39074280',
      flag: 'https://flagcdn.com/w160/af.png'
    },
    {
      city: 'Kabul',
      region: 'Kabul',
      country: 'Algeria',
      aqi: '35.74358974',
      population: '43984569',
      flag: 'https://flagcdn.com/w160/dz.png'
    },
    {
      city: 'Kabul',
      region: 'Kabul',
      country: 'Algeria',
      aqi: '55.74358974',
      population: '43984569',
      flag: 'https://flagcdn.com/w160/dz.png'
    },
    {
      city: 'Kabul',
      region: 'Kabul',
      country: 'Algeria',
      aqi: '75.74358974',
      population: '43984569',
      flag: 'https://flagcdn.com/w160/dz.png'
    },
    {
      city: 'Kabul',
      region: 'Kabul',
      country: 'Algeria',
      aqi: '99.74358974',
      population: '43984569',
      flag: 'https://flagcdn.com/w160/dz.png'
    },
    {
      city: 'Kabul',
      region: 'Kabul',
      country: 'Afghanistan',
      aqi: '15.42105263',
      population: '39074280',
      flag: 'https://flagcdn.com/w160/af.png'
    },
    {
      city: 'Kabul',
      region: 'Kabul',
      country: 'Algeria',
      aqi: '35.74358974',
      population: '43984569',
      flag: 'https://flagcdn.com/w160/dz.png'
    },
    {
      city: 'Kabul',
      region: 'Kabul',
      country: 'Algeria',
      aqi: '55.74358974',
      population: '43984569',
      flag: 'https://flagcdn.com/w160/dz.png'
    },
    {
      city: 'Kabul',
      region: 'Kabul',
      country: 'Algeria',
      aqi: '75.74358974',
      population: '43984569',
      flag: 'https://flagcdn.com/w160/dz.png'
    },
    {
      city: 'Kabul',
      region: 'Kabul',
      country: 'Algeria',
      aqi: '99.74358974',
      population: '43984569',
      flag: 'https://flagcdn.com/w160/dz.png'
    },
    {
      city: 'Kabul',
      region: 'Kabul',
      country: 'Afghanistan',
      aqi: '15.42105263',
      population: '39074280',
      flag: 'https://flagcdn.com/w160/af.png'
    },
    {
      city: 'Kabul',
      region: 'Kabul',
      country: 'Algeria',
      aqi: '35.74358974',
      population: '43984569',
      flag: 'https://flagcdn.com/w160/dz.png'
    },
    {
      city: 'Kabul',
      region: 'Kabul',
      country: 'Algeria',
      aqi: '55.74358974',
      population: '43984569',
      flag: 'https://flagcdn.com/w160/dz.png'
    },
    {
      city: 'Kabul',
      region: 'Kabul',
      country: 'Algeria',
      aqi: '75.74358974',
      population: '43984569',
      flag: 'https://flagcdn.com/w160/dz.png'
    },
    {
      city: 'Kabul',
      region: 'Kabul',
      country: 'Algeria',
      aqi: '99.74358974',
      population: '43984569',
      flag: 'https://flagcdn.com/w160/dz.png'
    }
  ];
  constructor(private http: HttpClient) {}

  public login(user) {
    const url = environment.baseUrl + AppSettings.login;
    return this.http.post(url, user);
  }

  public getAllCountries() {
    return [...this.countries];
  }
}
