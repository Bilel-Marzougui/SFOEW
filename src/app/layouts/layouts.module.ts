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
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
@NgModule({
  declarations: [FrontLayoutComponent, PatientLayoutComponent, ProfessionnelLayoutComponent, HeaderComponent, SidenavComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    RouterModule,
    MatIconModule,
    MatProgressBarModule,
    TranslateModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule
  ]
})
export class LayoutsModule { }
