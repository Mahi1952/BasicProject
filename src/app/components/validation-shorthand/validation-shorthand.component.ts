import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export function skuValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value.match(nameRe)) return { invalidSku: true };
    return null;
  };
}

@Component({
  selector: 'app-validation-shorthand',
  templateUrl: './validation-shorthand.component.html',
  styleUrl: './validation-shorthand.component.scss',
})
export class ValidationShorthandComponent {
  myForm: FormGroup;
  sku: AbstractControl;

  // constructor(fb: FormBuilder) {
  //   this.myForm = fb.group({ sku: ['', Validators.required] });
  //   this.sku = this.myForm.controls['sku'];
  // }
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: [
        '',
        Validators.compose([Validators.required, skuValidator(/^123/i)]),
      ],
    });
    this.sku = this.myForm.controls['sku'];
  }

  onSubmit(value: any): void {
    console.log('you sumbitted value: ', this.sku.value);
  }
}
