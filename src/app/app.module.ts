import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutsModule} from './layouts/layouts.module';
import { NotFoundComponent } from './views/shared-components/not-found/not-found.component';
import { AuthComponent } from './views/shared-components/auth/auth.component'
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AuthComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
