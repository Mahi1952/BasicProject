import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrl: './demo-form.component.scss'
})
export class DemoFormComponent {
  productName:string;

  constructor()
  {
    this.productName = "Laptop"
  }

  onSubmit(value:string): void {
    console.log('you submitted value: ', value)
  }
}
