import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DossierComponent } from './dossier/dossier.component';

const routes: Routes = [
  {path:'',component:DossierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DossierFormsRoutingModule { }
