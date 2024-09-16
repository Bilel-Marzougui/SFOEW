import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { NotFoundComponent } from './views/shared-components/not-found/not-found.component';
import { AuthComponent } from './views/shared-components/auth/auth.component'
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter, MatNativeDateModule, MatRippleModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio'
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideBarComponent } from './views/shared-components/side-bar/side-bar.component';
import { EditProfilComponent } from './views/patient/edit-profil/edit-profil.component';
import { EditProfilProComponent } from './views/professionnel/edit-profil-pro/edit-profil-pro.component';
import { InvitationsComponent } from './views/professionnel/invitations/invitations/invitations.component';
import { InvitationsModule } from './views/professionnel/invitations/invitations.module';
import { ContactModule } from './views/front/contact/contact.module';
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng5SliderModule } from 'ng5-slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxPaginationModule } from 'ngx-pagination';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider,FacebookLoginProvider} from 'angularx-social-login';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DetailsPatientComponent } from './views/shared-components/details-patient/details-patient.component';
import { DetailsProfessionnelComponent } from './views/shared-components/details-professionnel/details-professionnel.component';
import { InterceptorService } from '../app/views/services/loader/interceptor.service';
import {   MatListModule } from '@angular/material/list';
import { FormdPrRoutingModule } from './views/professionnel/preview-form-doctor/formd-pr-routing.module';
import { FormdPrModule } from './views/professionnel/preview-form-doctor/formd-pr.module';
import { ToastrModule } from 'ngx-toastr';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { SignaturePadModule } from '@ng-plus/signature-pad';

const CLIENT_ID = '338766570747-9ci8df39dn8h1n0nve8qpl1imoaqok6r.apps.googleusercontent.com';
const googleLoginOptions = {
  scope: 'profile email',
  plugin_name:'login' //you can use any name here
}; 
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AuthComponent,
    SideBarComponent,
    EditProfilComponent,
    EditProfilProComponent,
    DetailsPatientComponent,
    DetailsProfessionnelComponent,
  
 
 


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
    YouTubePlayerModule,
    MatRippleModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    ScrollingModule,
    MatTabsModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatListModule,
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
    Ng2SearchPipeModule,
    Ng5SliderModule,
    MatGridListModule,
    MatCheckboxModule,
    NgxPaginationModule,
    SocialLoginModule,
    MatProgressBarModule,
    FormdPrRoutingModule,
    FormdPrModule,
    SignaturePadModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    



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
  providers: [MatDatepickerModule, DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '338766570747-9ci8df39dn8h1n0nve8qpl1imoaqok6r.apps.googleusercontent.com', 
               googleLoginOptions
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '473356701343037'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export function httpTranslateLoder(http:HttpClient){
//   return new TranslateHttpLoader(http);
// }
