
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect route
  { path: 'home', component: HomeComponent },           // component route
  { path: 'countries', component: CountryComponent },
  { path: 'contacts', component: ContactsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'country/:code', component: CountryComponent },
 
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(withEventReplay()),
    provideRouter(routes)
  ]
};

