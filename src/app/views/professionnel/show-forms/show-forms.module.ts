import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowFormsRoutingModule } from './show-forms-routing.module';
import { ShowFormsComponent } from './show-forms/show-forms.component';


@NgModule({
  declarations: [ShowFormsComponent],
  imports: [
    CommonModule,
    ShowFormsRoutingModule
  ]
})
export class ShowFormsModule { }
