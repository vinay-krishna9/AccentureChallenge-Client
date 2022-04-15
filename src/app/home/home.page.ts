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
}
