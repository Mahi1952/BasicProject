import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../../Models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements AfterViewInit {
  productForm: FormGroup;
  submitted = false;
  arrProducts: Product[] = [];
  idUpdated: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.productService.getProductsHTTP().subscribe((data) => {
      this.arrProducts = data;
      console.log(this.arrProducts);
    });

    this.productForm = this.formBuilder.group({
      id: [0],
      pName: [''],
      price: [''],
      imgPath: [''],
    });
  }

  ngAfterViewInit() {
    // Ensure the form is not filled before the data is fully loaded
  }

  get f() {
    return this.productForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.productForm.valid) {
      const { id, pName, price, imgPath } = this.productForm.value;
      const productToUpdate = new Product(
        id,
        pName,
        parseInt(price),
        imgPath,
        []
      );
      this.productService.updateThisProduct(productToUpdate);
    }
  }

  onChangeType(evt: any) {
    const idObtained = evt.value; // Changed to evt.value for mat-select
    this.idUpdated = idObtained;

    this.productService.getProductByIdHTTP(this.idUpdated).subscribe((data) => {
      if (data) {
        this.productForm.patchValue({
          id: data.id,
          pName: data.pName,
          price: data.price,
          imgPath: data.imgPath,
        });
      }
    });
  }
}
