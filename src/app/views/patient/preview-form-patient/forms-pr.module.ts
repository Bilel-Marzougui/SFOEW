import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsPrRoutingModule } from './forms-pr-routing.module';
import { PrFormComponent } from './pr-form/pr-form.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { Ng5SliderModule } from 'ng5-slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PreviewFormComponent } from './preview-form/preview-form.component';

@NgModule({
  declarations: [PrFormComponent,PreviewFormComponent],
  imports: [
    CommonModule,
    FormsPrRoutingModule,
    MatRadioModule,
    MatSelectModule,
    Ng5SliderModule,
    MatCheckboxModule
  ]
})
export class FormsPrModule { }
