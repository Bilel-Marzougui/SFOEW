import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilPatRoutingModule } from './profil-pat-routing.module';
import { ProfilPatComponent } from './profil-pat/profil-pat.component'
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
  declarations: [ProfilPatComponent],
  imports: [
    CommonModule,
    ProfilPatRoutingModule,
    RouterModule ,
    MatDialogModule,
    TranslateModule
   ]
})
export class ProfilPatModule { }
