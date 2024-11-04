import { Component, Input } from '@angular/core';
import { Product } from '../../Models/product';
import { Console } from 'console';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() productdetails: Product = new Product(0, '', 0, '', []);

  getDetails(pName: string) {
    console.log('Product added...', pName);
  }
}
