import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowFormsRoutingModule } from './show-forms-routing.module';
import { ShowFormsComponent } from './show-forms/show-forms.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { Ng5SliderModule } from 'ng5-slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ToastrModule } from 'ngx-toastr';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [ShowFormsComponent],
  imports: [
    CommonModule,
    ShowFormsRoutingModule,
    MatRadioModule,
    MatSelectModule,
    Ng5SliderModule,
    MatCheckboxModule,
    ToastrModule.forRoot(),
    ScrollingModule
  ]
})
export class ShowFormsModule { }
