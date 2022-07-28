import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonformulaireRoutingModule } from './monformulaire-routing.module';
import { MonFormulaireComponent } from './mon-formulaire/mon-formulaire.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [MonFormulaireComponent],
  imports: [
    CommonModule,
    MonformulaireRoutingModule,
    MatTableModule
  ]
})
export class MonformulaireModule { }
