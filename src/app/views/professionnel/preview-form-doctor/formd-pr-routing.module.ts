import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriviewFormDoctorComponent } from './priview-form-doctor/priview-form-doctor.component';
const routes: Routes = [
  {path:'',component:PriviewFormDoctorComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormdPrRoutingModule { }
