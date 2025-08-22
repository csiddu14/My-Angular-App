import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [NgFor, NgIf, DecimalPipe],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent implements OnInit {
  countries: any[] = [];
  loading = true;
  error = '';
  selectedCountry: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,currency,fifa').subscribe({
      next: (data) => {
        this.countries = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load country data.';
        this.loading = false;
      }
    });
  }

  selectCountry(country: any) {
    if (country.fifa) {
      this.loading = true;
      this.http.get<any[]>(`https://restcountries.com/v3.1/alpha/${country.fifa}`).subscribe({
        next: (data) => {
          this.selectedCountry = Array.isArray(data) ? data[0] : data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load selected country details.';
          this.loading = false;
        }
      });
    } else {
      this.selectedCountry = country;
    }
  }
}
