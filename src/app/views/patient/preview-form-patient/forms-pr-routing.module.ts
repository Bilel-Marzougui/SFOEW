import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrFormComponent } from './pr-form/pr-form.component';
import { PreviewFormComponent } from './preview-form/preview-form.component';
const routes: Routes = [
  {path:'',component:PrFormComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsPrRoutingModule { }
