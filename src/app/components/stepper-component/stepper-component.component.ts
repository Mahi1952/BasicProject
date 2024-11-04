import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-component',
  templateUrl: './stepper-component.component.html',
  styleUrl: './stepper-component.component.scss',
})
export class StepperComponentComponent {
  _formBuilder: FormBuilder;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(formsBuilder: FormBuilder) {
    this._formBuilder = formsBuilder;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  isLinear = false;
}
