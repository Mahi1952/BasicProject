import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Product, Itinery, Activity } from '../../Models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrl: './stepper-form.component.scss',
})
export class StepperFormComponent {
  isLinear = false;
  count = 0;
  countSecondFormSubmit = 0;

  product: Product = new Product(0, '', 0, '', []);
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public itineryForm: FormGroup;
  public productLabels = ['Skiing', 'Boating', 'Bungee jumping'];
  public validationMsgs = {
    location: [{ type: 'text', message: 'Enter a valid day' }],
  };
  itineries: Itinery[] = [];
  arrActivities: Activity[] = [];
  panelOpenState = false;

  arrProducts: Product[] = [];
  nums = [1, 2, 3, 4, 5];

  selectedCar: number = 1;
  htmlItinery: Itinery[] = [];

  tempProduct: Product = new Product(0, '', 0, '', []);

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    let data = this.productService.getProducts();
    this.arrProducts = data;
    console.log(data);

    // this.arrProducts.forEach(dt =>{
    //   dt.itinery.forEach(it=>{
    //     console.log(it.day);
    //   });
    // });
    //     this.tempProduct=this.arrProducts[0];
    // //console.log(this.tempProduct);
    //     this.htmlItinery=this.tempProduct.itinery;
    //     console.log(this.htmlItinery);

    this.itineryForm = this.formBuilder.group({
      itineries: this.formBuilder.array([this.createItineryFormGroup()]),
    });

    this.firstFormGroup = this.formBuilder.group({
      pNameCtrl: ['', Validators.required],
      priceCtrl: ['', Validators.required],
      imagePathCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.product = new Product(0, '', 0, '', this.itineries);
    this.itineries.forEach((itin) => {
      itin.activities = [];
    });
  } //constructor ends

  private createItineryFormGroup(): FormGroup {
    this.count++;
    return new FormGroup({
      day: new FormControl('', Validators.required),
      location: new FormControl(''),
      activities: new FormControl(''),
    });
  }
  ngOnInit(): void {}

  itineriesArr(): FormArray {
    //console.log(this.emailForm.get("emails"));
    return this.itineryForm.get('itineries') as FormArray;
  }

  public addItineryFormGroup() {
    const product_itineries = this.itineryForm.get('itineries') as FormArray;
    product_itineries.push(this.createItineryFormGroup());
  }

  public removeOrClearItinery(i: number) {
    const product_itineries = this.itineryForm.get('itineries') as FormArray;
    if (product_itineries.length > 1) {
      product_itineries.removeAt(i);
    } else {
      product_itineries.reset();
    }
  }

  saveFirstStepData(formdata: FormGroup) {
    console.log(formdata.value);

    this.product.pName = formdata.value.pNameCtrl;
    this.product.price = formdata.value.priceCtrl;
    this.product.imgPath = formdata.value.imagePathCtrl;
    console.log(this.product); //check console
  }

  saveSecondStepData(formdata: any) {
    if (this.itineryForm.valid) {
      const formData = this.itineryForm.value;
      console.log(formdata.itineries);
      //this.itineries=formdata.products
      formdata.itineries.forEach((fmData: any) => {
        console.log(fmData.activities);
        let arr_act_temp: Activity[] = [];
        fmData.activities.forEach((act: any) => {
          for (var j = 0; j < this.productLabels.length; j++) {
            if (this.productLabels[j] == act) {
              arr_act_temp.push(new Activity(j, act));
            }
          }
        });
        this.itineries.push(
          new Itinery(0, fmData.day, fmData.location, arr_act_temp)
        );
      });

      // Optional: Call a service to save to backend
      console.log('Itineries:', this.itineries);
      this.product.itin = this.itineries;
      this.arrProducts.push(this.product);
      this.resetForm();
      console.log(this.arrProducts);
    } else {
      // Handle form validation errors
    }
  }
  resetForm() {
    this.itineryForm.reset();
    this.itineries = [];
  }
}
