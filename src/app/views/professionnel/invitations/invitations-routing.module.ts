import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvitationsComponent } from './invitations/invitations.component';

const routes: Routes = [
  {path:'',component:InvitationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitationsRoutingModule { }
