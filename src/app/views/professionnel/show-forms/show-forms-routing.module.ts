import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ShowFormsComponent} from './show-forms/show-forms.component'
const routes: Routes = [
  {path:'',component:ShowFormsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowFormsRoutingModule { }
