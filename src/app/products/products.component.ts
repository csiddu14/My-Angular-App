import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  loading = true;
  error = '';

  constructor(private productservice: ProductserviceService) {}

  ngOnInit() {
    this.productservice.getproductlist().subscribe({
      next: (data: any) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load products.';
        this.loading = false;
      }
    });
  }
}
