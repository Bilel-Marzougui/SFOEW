import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbonnementPaypalRoutingModule } from './abonnement-paypal-routing.module';
import { AbonnementPaypalComponent } from './abonnement-paypal/abonnement-paypal.component';


@NgModule({
  declarations: [AbonnementPaypalComponent],
  imports: [
    CommonModule,
    AbonnementPaypalRoutingModule
  ]
})
export class AbonnementPaypalModule { }
