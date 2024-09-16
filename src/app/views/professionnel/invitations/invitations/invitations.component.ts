import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { InvitaionsService } from '../../../services/professionnel/invitaions.service';
import { AuthProfessionnelService } from '../../../services/professionnel/auth-professionnel.service';
import{PatientDataService} from '../../../services/shared-data/patient-data.service'
import { UpdProfilPatientService } from 'src/app/views/services/patient/upd-profil-patient.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DemandePatService } from 'src/app/views/services/patient/demande-pat.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent implements OnInit,OnChanges {
  @Input() public value: string;
  id: any;
  allFrormsNumber:any
  invts:any
  contacts:any
  invt:any
  test:true
  i=1;
  filtredInvts:any
  PatientID:any
  index:any
  mesgEmpty: boolean=false;
  listPatient:any;
  p:number;
  friend = true;
  pat={

    name: 'hanen',
    lastname: 'yassin',
    birthday: '12/12/2015',
    adresse: 'jj',
    tel: '+33333333333333',
    email: 'yassin1@gmail.com',
 
 
    gender: 'homme',
    photo: '',
 
    added_date: '2022-05-26T09:50:18.419+00:00',
    _id:""
  
  }
  limit:any;
  skip:any;
  constructor(private _patient:UpdProfilPatientService,private snackBar:MatSnackBar,
    private DemandeService: DemandePatService,private invservice:InvitaionsService,private authPro: AuthProfessionnelService ,private PatData:PatientDataService ) {
    this.id = this.authPro.geid() 
   }

  ngOnInit(): void {
 
/*     this._patient.refreshNeeded$.subscribe((res)=>{
      
      this.geAllPatients()
          })   */
    /*        this.invservice.refreshNeeded$.subscribe((res)=>{
            console.log(777)
            this.geAllPatients()
          })  */ 
   this.geAllPatients()
/*     this.invservice.getInvts(this.id).subscribe(response =>{
      this.mesgEmpty=false;

      this.invts = response
 
      this.mesgEmpty=true;

       console.log( this.invts)  

    }) */

/*   setTimeout(() => {
    this.getPage(1)
  }, 1000); */
   
  }

  geAllPatients(){
  
    this._patient.getAllPatient().subscribe((res)=>{
      if(res){
         this.listPatient=res;
         this.filtredInvts=res;
       
         this.invservice.getInvt(this.id).subscribe(response =>{
           response.res.map((res)=>{
         
           var indexC = this.listPatient.findIndex(s => s._id === res.patient);
            this.listPatient.splice (indexC, 1); 
           }) 
     
       })  
       }
        })
  }
  acceptInvt(body:any){
    this.invservice.acceptInvts(this.id,body).subscribe(response=>{
      this.snackBar.open("invite  accepted " ,"×", {

        duration: 5000,

 

        verticalPosition: 'top',
        panelClass:'success'

      });},error=> this.snackBar.open(" invite  accepted" ,"×", {

        duration: 5000,
  
 
  
        verticalPosition: 'top',
        panelClass:'success'
  
      })
      )

  }

  ngOnChanges(value) {
    this.filterItem(value)
  }
  filterItem(value) {
  /*   console.log(this.listPatient,this.filtredInvts) */
    this.listPatient = this.filtredInvts.filter(i => {
      return (
        i.name.toLowerCase().includes(value.toLowerCase()) ||
        i.lastname.toLowerCase().includes(value.toLowerCase()) 

      )
    })
/* console.log( this.invts) */ 
 }

  
getIdPat(idPat){
this.PatData.GetId(idPat)
}

onMouseEnter(event: any): void {
  event.target.click();
  
  
}
details(i){
 /*  console.log(i) */
  this.index=i
  this.pat=(this.invts[i].patient)
/*   console.log(this.pat)
console.log(this.pat.name) */
    
}
addPatient(id:any,index:any){
/* console.log(id,localStorage.getItem('id_Pro'),index); */
 
  let obj ={
 
    doctor :localStorage.getItem('id_Pro'),
    patient:id
 
}
this.DemandeService.AddPatient(obj).subscribe((res)=>{
 
if(res._id){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Invitation a été envoyée'
  })
  var indexE = this.listPatient.findIndex(s => s._id === id);
 
   this.listPatient.splice (indexE, 1);  
   this.invservice.getListEnvoi(this.id).subscribe((res)=>{

  })
}else{
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'error',
    title: 'Invitation non envoyée'
  })
}
})  
}
  getPage(p:any) {
   /*  console.log(p*6,this.listPatient.length,p*6-6,p)
    console.log(this.listPatient[p*6-6].name,this.listPatient[p*6-1].name) */
    //console.log(p*5-5,p*5-1,p)
    this.limit=p*5-5;
    this.skip=p*5-1;
  
     // console.log(p)
    /*     for(let i =p*6-6;i<p*6-1;i++){
        console.log(this.listPatient[i])
      }  */ 


  }
}
