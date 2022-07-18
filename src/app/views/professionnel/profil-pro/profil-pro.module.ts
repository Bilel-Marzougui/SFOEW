import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilProRoutingModule } from './profil-pro-routing.module';
import { ProfilProComponent } from './profil-pro/profil-pro.component';


@NgModule({
  declarations: [ProfilProComponent],
  imports: [
    CommonModule,
    ProfilProRoutingModule
  ]
})
export class ProfilProModule { }
