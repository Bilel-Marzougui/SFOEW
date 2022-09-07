import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientFormsRoutingModule } from './patient-forms-routing.module';
import { PatientFormsComponent } from './patient-forms/patient-forms.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [PatientFormsComponent],
  imports: [
    CommonModule,
    PatientFormsRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class PatientFormsModule { }
