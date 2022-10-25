import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddpatientRoutingModule } from './addpatient-routing.module';
import { AddPatientComponent } from './add-patient/add-patient.component';


@NgModule({
  declarations: [AddPatientComponent],
  imports: [
    CommonModule,
    AddpatientRoutingModule
  ]
})
export class AddpatientModule { }
