import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbonnementPaypalComponent } from './abonnement-paypal/abonnement-paypal.component';

const routes: Routes = [
  {path:'',component:AbonnementPaypalComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbonnementPaypalRoutingModule { }
