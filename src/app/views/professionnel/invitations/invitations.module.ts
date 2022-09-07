import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationsRoutingModule } from './invitations-routing.module';
import { InvitationsComponent } from './invitations/invitations.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [InvitationsComponent],
  imports: [
    CommonModule,
    InvitationsRoutingModule,
    FormsModule
  ]
})
export class InvitationsModule { }
