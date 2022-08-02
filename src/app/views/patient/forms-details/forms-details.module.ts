import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsDetailsRoutingModule } from './forms-details-routing.module';
import { FormsDetailsComponent } from './forms-details/forms-details.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { Ng5SliderModule } from 'ng5-slider';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [FormsDetailsComponent],
  imports: [
    CommonModule,
    FormsDetailsRoutingModule,
    MatRadioModule,
    MatSelectModule,
    Ng5SliderModule,
    MatCheckboxModule
  ]
})
export class FormsDetailsModule { }
