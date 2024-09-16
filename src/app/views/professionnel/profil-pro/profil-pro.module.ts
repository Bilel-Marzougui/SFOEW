import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilProRoutingModule } from './profil-pro-routing.module';
import { ProfilProComponent } from './profil-pro/profil-pro.component';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [ProfilProComponent],
  imports: [
    CommonModule,
    ProfilProRoutingModule,
    TranslateModule,
  ]
})
export class ProfilProModule { }
