import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDoctorsRoutingModule } from './list-doctors-routing.module';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
  declarations: [ListDoctorsComponent],
  imports: [
    CommonModule,
    ListDoctorsRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    TranslateModule
  ]
})
export class ListDoctorsModule { }
