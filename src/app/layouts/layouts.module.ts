import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [FrontLayoutComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    RouterModule,

  ]
})
export class LayoutsModule { }
