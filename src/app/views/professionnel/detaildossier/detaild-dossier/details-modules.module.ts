import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailDossierRoutingModule } from './detail-dossier-routing.module';
 import { DetailDossierComponent} from './detail-dossier/detail-dossier.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {TranslateModule} from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [DetailDossierComponent],
  imports: [
    DetailDossierRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    TranslateModule,
CommonModule
  ]
})
export class DetailsModulesModule { }
