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
import { DateAdapter, MatNativeDateModule, MatRippleModule, MAT_DATE_FORMATS } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SideBarComponent } from './views/shared-components/side-bar/side-bar.component';
import { EditProfilComponent } from './views/patient/edit-profil/edit-profil.component';
import { EditProfilProComponent } from './views/professionnel/edit-profil-pro/edit-profil-pro.component';
import { InvitationsComponent } from './views/professionnel/invitations/invitations/invitations.component';
import { InvitationsModule } from './views/professionnel/invitations/invitations.module';
import { ContactModule } from './views/front/contact/contact.module';
import { MatTableModule } from '@angular/material/table'  
import { MatSortModule } from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AuthComponent,
    SideBarComponent,
    EditProfilComponent,
    EditProfilProComponent,
  

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
    MatIconModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    HttpClientModule,
    MatPasswordStrengthModule,
    MatToolbarModule,
    InvitationsModule,
    MatTableModule,
    MatSortModule,
    MatTableModule,
    MatSnackBarModule,
    Ng2SearchPipeModule




  ],

  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    Ng2TelInputModule
  ],
  entryComponents: [
    AuthComponent,
    EditProfilComponent,
    EditProfilProComponent
  ],
  providers: [    MatDatepickerModule,DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export function httpTranslateLoder(http:HttpClient){
//   return new TranslateHttpLoader(http);
// }
