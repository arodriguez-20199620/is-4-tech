import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    CommonModule
  ],
  templateUrl: './stepper.component.html',

})
export default class StepperComponent {

  readonly maxDate = new Date(Date.now());
  readonly minDate = new Date(1924, 0, 1);

  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
  });
  thirdFormGroup = this._formBuilder.group({
    dpiCtrl: [''],
    isDpiEnabled: [false],
  });
  isEditable = false;
  get isDpiEnabled() {
    return this.thirdFormGroup.get('isDpiEnabled')?.value;
  }
}
