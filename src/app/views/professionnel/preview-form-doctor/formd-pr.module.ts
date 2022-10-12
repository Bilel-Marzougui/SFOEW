import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { Ng5SliderModule } from 'ng5-slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PriviewFormDoctorComponent } from './priview-form-doctor/priview-form-doctor.component';
import { FormdPrRoutingModule } from './formd-pr-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {TranslateModule} from '@ngx-translate/core';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [PriviewFormDoctorComponent],
  imports: [
    CommonModule,
    MatRadioModule,
    MatSelectModule,
    Ng5SliderModule,
    MatCheckboxModule,
    FormdPrRoutingModule,
    ScrollingModule,
    TranslateModule,
    MatTooltipModule
  ]
})
export class FormdPrModule { }
