import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientFormsComponent } from './patient-forms/patient-forms.component';

const routes: Routes = [
  {path:'',component:PatientFormsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientFormsRoutingModule { }
