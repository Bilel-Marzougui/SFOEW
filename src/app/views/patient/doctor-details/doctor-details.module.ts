import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorDetailsRoutingModule } from './doctor-details-routing.module';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';


@NgModule({
  declarations: [DoctorDetailsComponent],
  imports: [
    CommonModule,
    DoctorDetailsRoutingModule
  ]
})
export class DoctorDetailsModule { }
