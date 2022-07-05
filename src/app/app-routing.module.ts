import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AuthComponent } from './views/shared-components/auth/auth.component';
import { NotFoundComponent } from './views/shared-components/not-found/not-found.component';
import { SideBarComponent } from './views/shared-components/side-bar/side-bar.component';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'contact',loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)},
    {path:'about',loadChildren:()=>import('./views/front/about/about.module').then(m=>m.AboutModule)},

  ]},
  {path:'auth',component:AuthComponent},
  {path:'profile',component:SideBarComponent},

  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
