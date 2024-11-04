import { Component } from '@angular/core';
import { Product } from '../../Models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.scss',
})
export class ViewProductsComponent {
  // pName:string = ""
  arrProduct: Product[] = [];
  p: Product = new Product(0, '', 0, '', []);

  panelOpenState: boolean = false;

  constructor(private productService: ProductService) {
    // this.pName = "SmartPhone"
    // this.arrProduct = [
    //   new Product(1,"laptop",70000, ""),
    //   new Product(2,"mouse",1600, ""),
    //   new Product(3,"keyboard",3000, ""),
    //   new Product(4,"smartphone",40000, ""),
    //   new Product(5,"mic",10000, "")
    // ]

    // this.arrProduct = this.productService.getProducts();
    this.productService.getProductsHTTP().subscribe((data) => {
      this.arrProduct = data;
      console.log(this.arrProduct);
    });
    console.log(this.arrProduct);
  }

  addNewProduct() {
    this.p = new Product(6, 'Speaker', 4000, '', []);
    this.productService.addProduct(this.p);
  }

  updateNewProduct() {
    this.productService.updateProduct(this.arrProduct);
  }

  deleteNewProduct() {
    this.productService.deleteProduct(this.arrProduct, 0);
    console.log(this.arrProduct);
  }
}
