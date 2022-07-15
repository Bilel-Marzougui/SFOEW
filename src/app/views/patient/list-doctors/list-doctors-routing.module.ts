import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';

const routes: Routes = [
  {path:'',component:ListDoctorsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDoctorsRoutingModule { }
