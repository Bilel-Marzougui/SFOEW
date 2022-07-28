import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonFormulaireComponent } from './mon-formulaire/mon-formulaire.component';

const routes: Routes = [
  {path:'',component:MonFormulaireComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonformulaireRoutingModule { }
