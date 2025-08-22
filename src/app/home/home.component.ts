import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [ReactiveFormsModule,FormsModule,NgIf]
})
export class HomeComponent {

profileform=new FormGroup({
   name:new FormControl('',[Validators.required,Validators.minLength(5)]),
   pass:new FormControl('',[Validators.required,Validators.minLength(5)])
    }
  )
  onsubmit()
  {
    console.log(this.profileform.value)
  }
 
 
 
get name()
{
return this.profileform.get('name');
}
get pass()
{
return this.profileform.get('pass');
}

}
