import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonformulaireRoutingModule } from './monformulaire-routing.module';
import { MonFormulaireComponent } from './mon-formulaire/mon-formulaire.component';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgxPaginationModule } from 'ngx-pagination';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
  declarations: [MonFormulaireComponent],
  imports: [
    CommonModule,
    MonformulaireRoutingModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    NgxPaginationModule,
    TranslateModule
    
  ]
})
export class MonformulaireModule { }
