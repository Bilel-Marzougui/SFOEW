import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilPatRoutingModule } from './profil-pat-routing.module';
import { ProfilPatComponent } from './profil-pat/profil-pat.component'
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [ProfilPatComponent],
  imports: [
    CommonModule,
    ProfilPatRoutingModule,
    RouterModule ,
    MatDialogModule,
   ]
})
export class ProfilPatModule { }
