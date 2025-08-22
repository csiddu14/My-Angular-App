import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }

    getproductlist()
  {
    const url="https://fake-json-api.mock.beeceptor.com/companies"
   return this.http.get(url);
  }
}
