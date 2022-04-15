import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { Country } from './country.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  countries: Country[];

  constructor(private service: CountryService) {}

  ngOnInit() {
    this.countries = this.service.getAllCountries();
  }

  getRank(e) {
    return e < '20'
      ? 'Good'
      : e < '40' && e >= '20'
      ? 'Moderate'
      : e < '60' && e >= '40'
      ? 'Unhealthy'
      : e < '80' && e >= '60'
      ? 'Very Unhealthy'
      : 'Hazardous';
  }

  loadData(event) {
    setTimeout (() => {
      // API Call here
      event.target.complete();
   }, 500);
  }
}
