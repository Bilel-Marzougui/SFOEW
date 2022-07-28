import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientFormsRoutingModule } from './patient-forms-routing.module';
import { PatientFormsComponent } from './patient-forms/patient-forms.component';


@NgModule({
  declarations: [PatientFormsComponent],
  imports: [
    CommonModule,
    PatientFormsRoutingModule
  ]
})
export class PatientFormsModule { }
