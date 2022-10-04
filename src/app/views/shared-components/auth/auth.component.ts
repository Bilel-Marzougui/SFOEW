import { Component, Inject, OnInit,NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Validators} from '@angular/forms';
 import { MustMatch } from '../../helper/MustMatch.validator';
import{RegisterService} from '../../services/register.service'
import{LoginService} from '../../services/login.service'
import{AuthPatientService} from '../../services/patient/auth-patient.service'
import{AuthProfessionnelService} from '../../services/professionnel/auth-professionnel.service'
import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { ToastrService } from 'ngx-toastr';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'
interface Food {
  value: string;
  viewValue: string;
}
import Swal from 'sweetalert2'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']

})
export class AuthComponent implements OnInit{
  // user!:SocialUser;

  messageError:any;
  registerFormPro: FormGroup;
  registerFormPat:FormGroup;
  loginFormPro:FormGroup;
  loginFormPat:FormGroup;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Anato.Cyto. Pathologie (37)'},
    {value: 'pizza-1', viewValue: 'Anesthésiologie-Réanimmation.Chirurgicale (02)'},
    {value: 'tacos-2', viewValue: 'Cardiologie (03)'},
    {value: 'tacos-23', viewValue: 'Chir thoracique et cardio-vasculaire (47)'},
    {value: 'tacos-24', viewValue: 'Chir.maxillo-faciale, stomatologie (45)'},
    {value: 'tacos-25', viewValue: 'Chir.plast reconstructrice (46)'},
    {value: 'tacos-26', viewValue: 'Chir.viscérale et digestive (49)'},
    {value: 'tacos-27', viewValue: 'Chirurgie Dentaire (19)'},
    {value: 'tacos-28', viewValue: 'Chirurgie Dentaire spécialité O.D.F (36)'},
    {value: 'tacos-29', viewValue: 'Chirurgie générale (04)'},
    {value: 'tacos-277', viewValue: 'Chirurgie Infantile (43)'},
    {value: 'tacos-288', viewValue: 'Chirurgie maxillo-faciale (44)'},
    {value: 'tacos-299', viewValue: 'Chirurgie orale (69)'},
    {value: 'tacos-244', viewValue: 'Chirurgie Orthopédique (41)'},
    {value: 'tacos-255', viewValue: 'Chirurgie vasculaire (48)'},
    {value: 'tacos-266', viewValue: 'Chirurgien-dentise spécialité C.O. (53)'},
    {value: 'tacos-211', viewValue: 'Dermato Vénérologie (05)'},
    {value: 'tacos-222', viewValue: 'Directeur de laboratoire médecin'},
  ];
    submitted = false;
    public selectedVal="Professionnel";
    public selectedVal2="Professionnel";
   
    patientRegistreGmailDB;
    patientRegistreGmailT;
    patientRegistreGmailA;
    patientRegistreGmailG;
    patientRegistreGmailR;
    patientRegistreGmailE;
    patientRegistreGmailF;
    patientRegistreGmailL;
    patientRegistreGmailP;
    patientRegistreGmailFAX;
      doctor={
        photo: 'undefined',
        name: 'haj salah',
        lastname: 'karim',
        email: 'scoreapp2zzdddd021@gmail.com',
        birthday: '2022-06-22',
        adresse: 'Tunis',
        tel: '+21625295344',
        password: 'aqw741zsx852edc963',
        added_date: '',
        job: 'hjxgfhjklm',
        fax: '1111111111',
        gender: 'femme',
        adeli: '111111111',
        rpps: '11111111111',
        role: '2'
      }
      doctorLog={
        email: '',
        password: '',
    
      }
      patient={
    
          name: 'hanen',
          lastname: 'yassin',
          birthday: '12/12/2015',
          adresse: 'jj',
          tel: '+33333333333333',
          email: 'yassin1@gmail.com',
          password: 'yyyyyy',
          ssn: '77',
          gender: 'homme',
          photo: '',
          account_state: true,
          archived: false,
          added_date: '2022-05-26T09:50:18.419+00:00'
    
      }

    result:any;
    myDate = new Date();
    datatoken:any;
    dataResponse:any;
    status:any;
    action:any;
    showDetails: boolean;
    public showOverlay = true;
    hide : boolean = true;
    loading: boolean = false;
    myFunction() {
      this.hide = !this.hide;
    }

guser;
  constructor(
    private authService: SocialAuthService,
    private toast :ToastrService,
 private snackBar:MatSnackBar,
    private datePipe: DatePipe,
 
     ngZone :NgZone,
    public dialogRef: MatDialogRef<AuthComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel,
    private formBuilder: FormBuilder, private logService:LoginService ,
    private regService:RegisterService ,
    private AuthPatient:AuthPatientService ,
    private AuthProfessionnel:AuthProfessionnelService ,
    private router:Router)  {
      router.events.subscribe((event: RouterEvent) => {
        this.navigationInterceptor(event)
      })
    }
    navigationInterceptor(event: RouterEvent): void {
      if (event instanceof NavigationStart) {
        this.showOverlay = true;
      }
      if (event instanceof NavigationEnd) {
        this.showOverlay = false;
      }
  
      // Set loading state to false in both of the below events to hide the spinner in case a request fails
      if (event instanceof NavigationCancel) {
        this.showOverlay = false;
      }
      if (event instanceof NavigationError) {
        this.showOverlay = false;
      }
      setTimeout(() => {
        this.showOverlay = false;
      }, 5000);
    }
  ngOnInit() {

    
  /*   console.log(this.selectedVal)
    console.log(this.selectedVal2) */

    this.registerFormPro = this.formBuilder.group({

      name: ['', Validators.required],
      lastname: ['', Validators.required],
      birthday: ['', Validators.required],
      tel: ['', Validators.required],
      fax: ['', Validators.required,Validators.pattern("^[0-9]*$")],
      adresse: ['', Validators.required],
      gender: ['', Validators.required],
      job: ['', Validators.required],
      adeli: ['', Validators.required,Validators.pattern("^[0-9]*$")],
      rpps: ['', Validators.required,Validators.pattern("^[0-9]*$")],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,  Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]],
      confirmPassword: ['', Validators.required ],
      role: ['2',Validators.required],
      acceptTerms: [false, Validators.requiredTrue],

  }, {
      validator: MustMatch('password', 'confirmPassword')
  });


  this.registerFormPat = this.formBuilder.group({

    name: ['', Validators.required],
    lastname: ['', Validators.required],
    birthday: ['', Validators.required],
    tel: ['', Validators.required],
    adresse: ['', Validators.required],
    ssn: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,  Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]],
    confirmPassword: ['', Validators.required],
    acceptTerms: [false, Validators.requiredTrue]
}, {
    validator: MustMatch('password', 'confirmPassword')
});


this.loginFormPro = this.formBuilder.group({

  email: ['', Validators.required],
  password: ['', Validators.required],
},);

this.loginFormPat = this.formBuilder.group({

  email: ['', Validators.required],
  password: ['', Validators.required],
},);





}


onStrengthChanged(strength: number) {
/*   console.log(strength) */
}


get f() { return this.registerFormPro.controls; }
get fPat() { return this.registerFormPat.controls; }
get flogPro() { return this.loginFormPro.controls; }
get flogPat() { return this.loginFormPat.controls; }



public onValChange(val: any) {
  this.selectedVal = val;
/*    console.log(this.selectedVal) */
  this.status=(this.action+this.selectedVal)


}
public onValChange2(val: any) {
  this.selectedVal2 = val;
  // console.log(this.selectedVal2)
  this.status=(this.action+this.selectedVal2)


}

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(false);
/*     console.log(this.f.value) */
  }
  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

// *********register professionnel****************//

registerPro(info:any,type) {
/*   console.log('this is add',info) */
  if(type==1){
    this.AuthProfessionnel.registerProf(info)
    .subscribe(response=>{
     // console.log('this is add'+response)
   
     Swal.fire({
       position: 'center',
       icon: 'success',
       title: 'Inscription réussi',
       showConfirmButton: false,
       timer: 1500
     })
   
   },error=>{   
     Swal.fire({
       position: 'center',
       icon: 'warning',
       title: 'Inscription non reussi',
       showConfirmButton: false,
       timer: 1500
     }) })
    
   
     this.submitted = true;
     // stop here if form is invalid
     if (this.registerFormPro.invalid) {
         return;
     }
     // display form values on success
   
   //console.log('data is '+this.registerFormPro.value)
   let data=info.value
  }else{
  this.doctor.name=info.value.name
  this.doctor.lastname=info.value.lastname
  this.doctor.email=info.value.email
  this.doctor.birthday=this.datePipe.transform(info.value.birthday, 'yyyy-MM-dd');
  this.doctor.adresse=info.value.adresse
  this.doctor.tel=info.value.tel
  this.doctor.password=info.value.password
  this.doctor.added_date=this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  this.doctor.job=info.value.job
  this.doctor.fax=info.value.fax
  this.doctor.gender=info.value.gender
  this.doctor.adeli=info.value.adeli
  this.doctor.rpps=info.value.rpps
  this.doctor.role="2"


/*   console.log("doctor form",this.doctor) */
 this.AuthProfessionnel.registerProf(this.doctor)
 .subscribe(response=>{
  // console.log('this is add'+response)
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Inscription réussi',
    showConfirmButton: false,
    timer: 1500
  })

},error=>{   
  Swal.fire({
    position: 'center',
    icon: 'warning',
    title: 'Inscription non reussi',
    showConfirmButton: false,
    timer: 1500
  }) })
 

  this.submitted = true;
  // stop here if form is invalid
  if (this.registerFormPro.invalid) {
      return;
  }
  // display form values on success

//console.log('data is '+this.registerFormPro.value)
let data=info.value}

}
// *********register patient****************//

registerPat(infopat:any,type) {
  
if(type==1){
  console.log(" form",infopat) 
  this.AuthPatient.registerPatient(infopat) .subscribe((response)=>{
       Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'Inscription réussi',
         showConfirmButton: false,
         timer: 1500
       })
     
     },error=>{  
       Swal.fire({
         position: 'center',
         icon: 'warning',
         title: 'Inscription non reussi',
         showConfirmButton: false,
         timer: 1500
       }) 
       
   /*    console.log('this is add'+error)  */
   /*     this.snackBar.open(" Ce compte existe" ,"×", {
     
         duration: 5000,
    
     
         verticalPosition: 'top',
         panelClass:'success'
     
       }) */;})
   
     this.submitted = true;
   
     // stop here if form is invalid
     if (this.registerFormPat.invalid) {
         return;
     }
}else{
  this.patient.name=infopat.value.name
  this.patient.lastname=infopat.value.lastname
  this.patient.email=infopat.value.email
  this.patient.birthday=this.datePipe.transform(infopat.value.birthday, 'yyyy-MM-dd');
  this.patient.adresse=infopat.value.adresse
  this.patient.tel=infopat.value.tel
  this.patient.password=infopat.value.password
  this.patient.added_date=this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  this.patient.gender=infopat.value.gender
  this.patient.archived=false
  this.patient.account_state=true
  this.patient.ssn=infopat.value.ssn

 /*  console.log("patient form",this.patient) */
  this.AuthPatient.registerPatient(this.patient) .subscribe((response)=>{
 /*    this.snackBar.open(" Inscription réussie " ,"×", {
  
      duration: 5000,
 
  
      verticalPosition: 'top',
      panelClass:'success'
  
    }); */
/*     console.log(response) */
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Inscription réussi',
      showConfirmButton: false,
      timer: 1500
    })
  
  },error=>{  
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Inscription non reussi',
      showConfirmButton: false,
      timer: 1500
    }) 
    
/*    console.log('this is add'+error)  */
/*     this.snackBar.open(" Ce compte existe" ,"×", {
  
      duration: 5000,
 
  
      verticalPosition: 'top',
      panelClass:'success'
  
    }) */;})

  this.submitted = true;

  // stop here if form is invalid
  if (this.registerFormPat.invalid) {
      return;
  }
}
  


}
// *********login professionnel****************//

loginPro(loginFormPro:any){
  let data=loginFormPro.value
  this.AuthProfessionnel.loginSPro(data).subscribe(data=>{
    this.datatoken=data
    this.AuthProfessionnel.saveDataPro(this.datatoken.token)
    this.router.navigate(['/professionnel/formulaires'])


  },(err:HttpErrorResponse)=>this.messageError=err.error.error)
}

// *********login patient****************//
loginPat(loginFormPat:any){
/*   console.log(loginFormPat.value) */
  let data=loginFormPat.value
  this.AuthPatient.loginSPat(data).subscribe(data=>{
    this.datatoken=data
/*     console.log(data) */
    this.AuthPatient.saveDataPat(this.datatoken.token)
    this.router.navigate(['/patient/profil'])



  },(err:HttpErrorResponse)=>this.messageError=err.error.error)
}


onReset() {
  this.submitted = false;
  this.registerFormPro.reset();
  this.registerFormPat.reset();

}
registreLoginGmail(data:any){
/*   console.log("yyyy",data) */
  this.AuthPatient.loginSPat(data).subscribe(data=>{
    this.datatoken=data
  /*   console.log(data) */
    this.AuthPatient.saveDataPat(this.datatoken.token)
    this.router.navigate(['/patient/profil'])



  },(err:HttpErrorResponse)=>this.messageError=err.error.error)
}
signInWithGoogle(): void {
 
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((response)=>{
   /*  console.log("resss",response) */
    this.patientRegistreGmailE=response.email;
    this.patientRegistreGmailP=response.photoUrl;
    this.patientRegistreGmailF=response.firstName;
    this.patientRegistreGmailL=response.lastName
    let obj ={
      email :response.email
    }
    if(this.selectedVal=='Patient')
    this.AuthPatient.emailIsExist(obj).subscribe((res)=>{
   this.result =res 
   if(this.result.res =='Invalid Email'){
         this.swal()
            }else{
              let objLogin = {
                email:  this.patientRegistreGmailE, password: 'azerty+*'
              }
         
              this.AuthPatient.loginSPat(objLogin).subscribe(data=>{
                this.datatoken=data
        /*         console.log(data) */
                this.AuthPatient.saveDataPat(this.datatoken.token)
                this.router.navigate(['/patient/profil'])
            
            
            
              },(err:HttpErrorResponse)=>this.messageError=err.error.error)
        /*       console.log('nnnnnnnnnnn',objLogin) */
   
            }
       
       })
    else{
      this.AuthProfessionnel.emailIsExist(obj).subscribe((res)=>{
        this.result =res 
        if(this.result.res =='Invalid Email'){
              this.swal()
                 }else{
                  let objLogin = {
                    email:  this.patientRegistreGmailE, password: 'azerty+*'
                  }
                  this.AuthProfessionnel.loginSPro(objLogin).subscribe(data=>{
                    this.datatoken=data
                    this.AuthProfessionnel.saveDataPro(this.datatoken.token)
                    this.router.navigate(['/professionnel/formulaires'])
                
                
                  },(err:HttpErrorResponse)=>this.messageError=err.error.error)
                /*    console.log('nnnnnnnnnnn') */
                 }
            
            })
    }
     },error=>{  
      console.log(error)
})
}



signOut(): void {
  this.authService.signOut();
}


async swal(){
/*   console.log(this.selectedVal) */
  if(this.selectedVal=='Patient' || this.selectedVal2=='Patient' )
  Swal.fire({
    title: 'Register Patient',
    width: '50%',
    html: `<form style="width:98%">
    <div class="form-row" >
      <div class="form-group col-md-6">
        <label for="inputEmail4">Adress</label>
        <input type="text" class="form-control" id="A" placeholder="Adress">
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">Némuro Téléphone</label>
        <input type="number" class="form-control" id="T" placeholder="Némuro Téléphone">
      </div>
    </div>
 
  
    <div class="form-row">
      
      <div class="form-group col-md-6">
        <label for="G">Sexe</label>
        <select id="G" class="form-control">
          <option selected>Homme</option>
          <option>Femme</option>
        </select>
      </div>
      <div class="form-group col-md-6">
      <label for="Date de naissance">Date de naissance</label>
      <input type="date" class="form-control" id="DB" placeholder="Date de naissance">
    </div>
    </div>
 
 
  </form>`,
    confirmButtonText: 'Register',
    focusConfirm: false,
    preConfirm: () => {
      this.patientRegistreGmailDB = Swal.getPopup().querySelector('#DB');
      this.patientRegistreGmailT = Swal.getPopup().querySelector('#T');
      this.patientRegistreGmailA = Swal.getPopup().querySelector('#A');
      this.patientRegistreGmailG = Swal.getPopup().querySelector('#G');
 
      if (!this.patientRegistreGmailDB.value || !this.patientRegistreGmailT.value|| !this.patientRegistreGmailA.value|| 
        !this.patientRegistreGmailG.value) {
        Swal.showValidationMessage(`Please enter login and password`)
      }
      return { DB: this.patientRegistreGmailDB.value , T: this.patientRegistreGmailT.value , A: this.patientRegistreGmailA.value,G:this.patientRegistreGmailG.value}
    }
  }).then((result) => {
    if(result.value){
    this.patient.photo=this.patientRegistreGmailP
    this.patient.name=this.patientRegistreGmailF
    this.patient.lastname=this.patientRegistreGmailL
    this.patient.email=this.patientRegistreGmailE
    this.patient.birthday=result.value.DB
    this.patient.adresse=result.value.A
    this.patient.tel=result.value.T
    this.patient.password="azerty+*"
    this.patient.added_date=this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.patient.gender=result.value.G
    this.registerPat(this.patient,1)
 
      let objLogin = {
        email:  this.patientRegistreGmailE, password: 'azerty+*'
      }
      this.registreLoginGmail(objLogin)
     /*  console.log('nnnnnnnnnnn',objLogin) */

    
  }
  /*   Swal.fire(`
      E: ${this.patientRegistreGmailE}
      P: ${this.patientRegistreGmailP}
      F: ${this.patientRegistreGmailF}
      L: ${this.patientRegistreGmailL}
      DB: ${result.value.DB}
      T: ${result.value.T}
      A: ${result.value.A}
      G: ${result.value.G}
    `.trim()) */
  })
  else 
  Swal.fire({
    title: 'Register Doctor',
    width: '50%',
    html: `<form style="width:98%">
    <div class="form-row" >
      <div class="form-group col-md-6">
        <label for="inputEmail4">Adress</label>
        <input type="text" class="form-control" id="A" placeholder="Adress">
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">Némuro Téléphone</label>
        <input type="number" class="form-control" id="T" placeholder="Némuro Téléphone">
      </div>
    </div>
 
  
    <div class="form-row">
      
      <div class="form-group col-md-6">
        <label for="G">Métier</label>
        <select id="G" class="form-control">
          <option selected>Anato.Cyto. Pathologie (37)</option>
          <option>Anesthésiologie-Réanimmation.Chirurgicale (02)</option>
        </select>
      </div>
      <div class="form-group col-md-6">
      <label for="Date de naissance">Date de naissance</label>
      <input type="date" class="form-control" id="DB" placeholder="Date de naissance">
    </div>
    <div class="form-group col-md-6">
    <label for="RPPS">RPPS</label>
    <input type="number" class="form-control" id="R" placeholder="RPPS">
  </div>
  <div class="form-group col-md-6">
  <label for="RPPS">FAX</label>
  <input type="number" class="form-control" id="FAX" placeholder="FAX">
</div>
    </div>
 
 
  </form>`,
    confirmButtonText: 'Register',
    focusConfirm: false,
    preConfirm: () => {
      this.patientRegistreGmailDB = Swal.getPopup().querySelector('#DB');
      this.patientRegistreGmailT = Swal.getPopup().querySelector('#T');
      this.patientRegistreGmailA = Swal.getPopup().querySelector('#A');
      this.patientRegistreGmailG = Swal.getPopup().querySelector('#G');
      this.patientRegistreGmailR = Swal.getPopup().querySelector('#R');
      this.patientRegistreGmailFAX = Swal.getPopup().querySelector('#FAX');
      console.log()
      if (!this.patientRegistreGmailDB.value || !this.patientRegistreGmailT.value|| !this.patientRegistreGmailA.value|| 
        !this.patientRegistreGmailG.value || !this.patientRegistreGmailR.value|| !this.patientRegistreGmailFAX.value) {
        Swal.showValidationMessage(`Please enter login and password`)
      }
      return { DB: this.patientRegistreGmailDB.value , T: this.patientRegistreGmailT.value ,FAX:this.patientRegistreGmailFAX.value
        , A: this.patientRegistreGmailA.value,G:this.patientRegistreGmailG.value,R:this.patientRegistreGmailR.value}
    }
  }).then((result) => {
    if(result.value){
      this.doctor.photo=this.patientRegistreGmailP
      this.doctor.name=this.patientRegistreGmailF
      this.doctor.lastname=this.patientRegistreGmailL
      this.doctor.email=this.patientRegistreGmailE
      this.doctor.birthday=result.value.DB;
      this.doctor.adresse=result.value.A
      this.doctor.tel=result.value.T
      this.doctor.password="azerty+*"
      this.doctor.added_date=this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
      this.doctor.job=result.value.G
      this.doctor.fax=result.value.FAX
      this.doctor.gender=""
      this.doctor.adeli=""
      this.doctor.rpps=result.value.R
      this.doctor.role="2"
    /*   console.log(this.doctor) */
      this.registerPro(this.doctor,1)
      let objLogin = {
        email:  this.patientRegistreGmailE, password: 'azerty+*'
      }
      /* console.log('nnnnnnnnnnn',objLogin) */
      this.AuthProfessionnel.loginSPro(objLogin).subscribe(data=>{
        this.datatoken=data
      /*   console.log(data) */
        this.AuthPatient.saveDataPat(this.datatoken.token)
        this.router.navigate(['/patient/profil'])
    
    
    
      },(err:HttpErrorResponse)=>this.messageError=err.error.error)
/*     Swal.fire(`
    E: ${this.patientRegistreGmailE}
    P: ${this.patientRegistreGmailP}
    F: ${this.patientRegistreGmailF}
    FAX: ${result.value.FAX}
    L: ${this.patientRegistreGmailL}
      DB: ${result.value.DB}
      T: ${result.value.T}
      A: ${result.value.A}
      G: ${result.value.G}
     R: ${result.value.R}
    `.trim()) */}
  })
  
}
hiii(){
  /*  console.log(this.patientRegistreGmail.value,) */
}
  //Logion
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((response)=>{
      console.log("recccccccccccccccccsss",response)
   
      
       },error=>{  
        console.log(error)
  });
   
  } 
  // Logout Function
 
}

export class DialogModel {
  constructor(public title: string, public message: string) {
  }



}



