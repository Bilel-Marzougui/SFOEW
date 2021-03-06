import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutsModule} from './layouts/layouts.module';
import { NotFoundComponent } from './views/shared-components/not-found/not-found.component';
import { AuthComponent } from './views/shared-components/auth/auth.component'
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AuthComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatIconModule

  ],

  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  entryComponents: [
    AuthComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
