import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailDossierComponent} from './detail-dossier/detail-dossier.component';
const routes: Routes = [  {path:'',component:DetailDossierComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailDossierRoutingModule { }
