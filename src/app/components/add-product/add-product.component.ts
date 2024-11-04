import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../../Models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  productForm: FormGroup;
  submitted = true;
  arrProducts: Product[] = [];
  product = new Product(0, '', 0, '', []);
  constructor(
    private formbuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.arrProducts = this.productService.getProducts();
    this.productForm = this.formbuilder.group({
      id: [0],
      pName: [''],
      price: [''],
      imgPath: [''],
    });
  }
  get f() {
    return this.productForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    var tempId = 0;
    var maxId = 0;
    this.arrProducts.forEach((p) => {
      if (maxId < p.id) {
        maxId = p.id;
      }
    });

    tempId = maxId;
    tempId = tempId + 1;
    console.log(tempId);

    let pN = this.productForm.value.pName;
    let pPr = this.productForm.value.price;
    let pImgPath = this.productForm.value.imgPath;

    console.log(pN, pPr, pImgPath);
    if (pN && pPr && pImgPath) {
      this.product = new Product(tempId, pN, parseInt(pPr), pImgPath, []);
      this.productService.addProduct(this.product);
      console.log(this.arrProducts);
    }
  }

  getProductbyId(id: number) {
    let product = new Product(0, '', 0, '', []);
    this.arrProducts.forEach((p) => {
      if (p.id == id) {
        product = p;
      }
    });
    //return p
  }
}
