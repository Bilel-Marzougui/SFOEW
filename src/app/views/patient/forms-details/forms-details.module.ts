import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsDetailsRoutingModule } from './forms-details-routing.module';
import { FormsDetailsComponent } from './forms-details/forms-details.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { Ng5SliderModule } from 'ng5-slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
  declarations: [FormsDetailsComponent],
  imports: [
    CommonModule,
    FormsDetailsRoutingModule,
    MatRadioModule,
    MatSelectModule,
    Ng5SliderModule,
    MatCheckboxModule,
    ScrollingModule,
    TranslateModule
  ]
})
export class FormsDetailsModule { }
