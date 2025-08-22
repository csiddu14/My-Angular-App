import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ProductserviceService } from './productservice.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
apiData: any;

  constructor(private productservice: ProductserviceService)
  {
 
  }

ngOnInit()
{
  this.productservice.getproductlist().subscribe((data:any)=>{
    //console.log(data);
  this.apiData=data.map((item:any)=>{
      return {
        name: item.name,
        id: item.id,
        email: item.email
      };
    })
  })
}

  protected readonly title = signal('mypay');
  show=false;
  books=["ABC","XYZ","PQR"];


}
