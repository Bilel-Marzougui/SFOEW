import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontLayoutComponent } from './front-layout/front-layout.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
