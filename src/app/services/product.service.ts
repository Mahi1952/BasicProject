import { Injectable } from '@angular/core';
import { Activity, Itinery, Product } from '../Models/product';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  arrProducts: Product[] = [];

  baseUrl: string;
  products: Product[] = [];
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
    // this.arrProducts = [
    //   new Product(100, 'Australia 10 days', 200000, '', [
    //     new Itinery(1, 'Day1', 'Sydney', [
    //       new Activity(1, 'Boating'),
    //       new Activity(2, 'Skydiving'),
    //     ]),
    //     new Itinery(2, 'Day3', 'Melbourne', [new Activity(3, 'River Rafting')]),
    //   ]),
    // ];
  }

  getProducts(): Product[] {
    return this.arrProducts;
  }

  getProductsHTTP(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(this.baseUrl + '/products')
      .pipe(retry(1), catchError(this.httpError));
  }
  getProductByIdHTTP(prod: number): Observable<Product> {
    return this.httpClient
      .get<Product>(this.baseUrl + '/products' + prod)
      .pipe(retry(1), catchError(this.httpError));
  }

  httpError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code:${error.status}\nMessage:${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }

  addProduct(p: Product) {
    this.arrProducts.push(p);
    console.log(this.arrProducts);
  }

  addProductHTTP(p: Product): Observable<Product> {
    return this.httpClient
      .post<Product>(
        this.baseUrl + '/products',
        JSON.stringify(p),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.httpError));
  }

  updateProduct(arrProduct: Product[]) {
    arrProduct[1].pName = 'Computer'; //pass id and Update
  }

  deleteProduct(arrProduct: Product[], id: number) {
    arrProduct.splice(id, 1); //pass id
  }

  getProductById(id: number): Product {
    let p = new Product(0, '', 0, '', []);
    for (var i = 0; i < this.arrProducts.length; i++) {
      if (this.arrProducts[i].id == id) {
        console.log(this.arrProducts[i]);
        return this.arrProducts[i];
      }
    }
    return p;
  }

  updateThisProduct(p: Product) {
    for (var i = 0; i < this.arrProducts.length; i++) {
      if (this.arrProducts[i].id == p.id) {
        console.log(this.arrProducts[i]);
        this.arrProducts[i] = p;
      }
    }
    console.log(this.arrProducts);
  }
}
