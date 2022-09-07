import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsDetailsComponent } from './forms-details/forms-details.component';
const routes: Routes = [
  {path:'',component:FormsDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsDetailsRoutingModule { }
