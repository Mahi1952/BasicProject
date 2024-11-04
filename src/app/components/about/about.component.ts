import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  myForm: FormGroup

  constructor(fb:FormBuilder){
    this.myForm = fb.group({
      'sku': ['ABC123']
    });
  }

  onSubmit(frmValue:any):void{
    console.log("submitted value: ", frmValue)
    console.log("submitted value: ", frmValue["sku"])
  }
}
