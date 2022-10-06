import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationsRoutingModule } from './invitations-routing.module';
import { InvitationsComponent } from './invitations/invitations.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
  declarations: [InvitationsComponent],
  imports: [
    CommonModule,
    InvitationsRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    TranslateModule
  ]
})
export class InvitationsModule { }
