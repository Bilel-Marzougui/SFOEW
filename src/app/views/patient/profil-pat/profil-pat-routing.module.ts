import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilPatComponent } from './profil-pat/profil-pat.component';

const routes: Routes = [
  {path:'',component:ProfilPatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilPatRoutingModule { }
