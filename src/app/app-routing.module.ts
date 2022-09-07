import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';
import { ProfessionnelLayoutComponent } from './layouts/professionnel-layout/professionnel-layout.component';
import { AuthComponent } from './views/shared-components/auth/auth.component';
import { NotFoundComponent } from './views/shared-components/not-found/not-found.component';
import { SideBarComponent } from './views/shared-components/side-bar/side-bar.component';
import {GuardProfessionnelGuard} from './views/guards/guard-professionnel.guard'
import {GuardPatientGuard} from './views/guards/guard-patient.guard'
import { EditProfilComponent } from './views/patient/edit-profil/edit-profil.component';
 
const routes: Routes = [

//******************* front-paths****************************//
  {path:'',component:FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'contact',loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)},
    {path:'about',loadChildren:()=>import('./views/front/about/about.module').then(m=>m.AboutModule)},

  ]},


  //******************* professionnel-paths****************************//

  {path:'professionnel',component:ProfessionnelLayoutComponent,canActivate:[GuardProfessionnelGuard],children:[
    {path:'profil',loadChildren:()=>import('./views/professionnel/profil-pro/profil-pro.module').then(m=>m.ProfilProModule)},
    {path:'Invitations',loadChildren:()=>import('./views/professionnel/invitations/invitations.module').then(m=>m.InvitationsModule)},
    {path:'contact',loadChildren:()=>import('./views/professionnel/contact/contact.module').then(m=>m.ContactModule)},
    {path:'formulaires',loadChildren:()=>import('./views/professionnel/monformulaire/monformulaire.module').then(m=>m.MonformulaireModule)},
    {path:'show-forms/:id',loadChildren:()=>import('./views/professionnel/show-forms/show-forms.module').then(m=>m.ShowFormsModule)},
    {path:'Abonnement',loadChildren:()=>import('./views/professionnel/abonnement-paypal/abonnement-paypal.module').then(m=>m.AbonnementPaypalModule)},
    {path:'preview-details/:id/:iddoctor/:idpatient',loadChildren:()=>import('./views/professionnel/preview-form-doctor/formd-pr.module').then(m=>m.FormdPrModule)},

  ]},
  
  //******************* patient-paths****************************//

  {path:'patient',component:PatientLayoutComponent,canActivate:[GuardPatientGuard],children:[
    {path:'home',loadChildren:()=>import('./views/patient/home/home.module').then(m=>m.HomeModule)},
    // {path:'',loadChildren:()=>import('./views/patient/home/home.module').then(m=>m.HomeModule)},
    {path:'profil',loadChildren:()=>import('./views/patient/profil-pat/profil-pat.module').then(m=>m.ProfilPatModule)},
    {path:'listDoctors',loadChildren:()=>import('./views/patient/list-doctors/list-doctors.module').then(m=>m.ListDoctorsModule)},
    {path:'contacts',loadChildren:()=>import('./views/patient/patient-forms/patient-forms.module').then(m=>m.PatientFormsModule)},
    {path:'doctor-details',loadChildren:()=>import('./views/patient/doctor-details/doctor-details.module').then(m=>m.DoctorDetailsModule)},
    {path:'forms-details/:id/:iddoctor/:idpatient',loadChildren:()=>import('./views/patient/forms-details/forms-details.module').then(m=>m.FormsDetailsModule)},
    {path:'preview-details/:id/:iddoctor/:idpatient',loadChildren:()=>import('./views/patient/preview-form-patient/forms-pr.module').then(m=>m.FormsPrModule)},
  ]},

  //******************* shared-paths****************************//
  {path:'auth',component:AuthComponent},
  // {path:'professionnel',component:ProfessionnelLayoutComponent,canActivate:[GuardProfessionnelGuard]},
  // {path:'patient',component:PatientLayoutComponent},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
