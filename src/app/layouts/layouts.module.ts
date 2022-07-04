import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { RouterModule } from '@angular/router';
import { MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [FrontLayoutComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    RouterModule,
    MatIconModule,


  ]
})
export class LayoutsModule { }
