import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilProComponent } from './profil-pro/profil-pro.component';

const routes: Routes = [
  {path:'',component:ProfilProComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilProRoutingModule { }
