import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDoctorsRoutingModule } from './list-doctors-routing.module';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [ListDoctorsComponent],
  imports: [
    CommonModule,
    ListDoctorsRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class ListDoctorsModule { }
