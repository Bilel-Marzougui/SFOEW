
import { DossierFormsRoutingModule } from './dossier-forms-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DossierFormsRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    TranslateModule,
  ]
})
export class DossierFormsModule { }
