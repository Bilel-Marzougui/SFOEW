import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { RouterModule } from '@angular/router';
import { MatIconModule} from '@angular/material/icon';
import { PatientLayoutComponent } from './patient-layout/patient-layout.component';
import { ProfessionnelLayoutComponent } from './professionnel-layout/professionnel-layout.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [FrontLayoutComponent, PatientLayoutComponent, ProfessionnelLayoutComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    RouterModule,
    MatIconModule,
    MatProgressBarModule,
    TranslateModule,
    FormsModule,
    MatInputModule,
    MatSelectModule

  ]
})
export class LayoutsModule { }
