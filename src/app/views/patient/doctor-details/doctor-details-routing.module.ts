import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';

const routes: Routes = [
  {path:'',component:DoctorDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorDetailsRoutingModule { }
