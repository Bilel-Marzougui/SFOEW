import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDoctorsRoutingModule } from './list-doctors-routing.module';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';


@NgModule({
  declarations: [ListDoctorsComponent],
  imports: [
    CommonModule,
    ListDoctorsRoutingModule
  ]
})
export class ListDoctorsModule { }
