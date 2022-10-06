import { Component, OnInit } from '@angular/core';
import { Professionnel } from 'src/app/views/interfaces/professionnel.interface';
import { DoctorsService } from 'src/app/views/services/patient/doctors.service';
import { DemandePatService } from 'src/app/views/services/patient/demande-pat.service';
import { AuthPatientService } from 'src/app/views/services/patient/auth-patient.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css']
})
export class ListDoctorsComponent implements OnInit {
  profs: any;
  profD:any ;
  timelines = [];
  searchDoctor:string
  added=false;
  friend = true;
  idPat: string;
  dataArray:any=[];
  filtredprofs:any
  obsGet: Subscription;
  obsAdd: Subscription;
  i:1;
  p:number;
  invts:any
  mesgEmpty: boolean=false;
  index:any;
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
 
  constructor(private snackBar:MatSnackBar,public doctorsService: DoctorsService, private authPat: AuthPatientService, private DemandeService: DemandePatService) {
    this.idPat = this.authPat.geid()
 this.obsGet=   this.doctorsService.getDoctors().subscribe(response =>{
  this.mesgEmpty=false;

  
      this.profs = response
  //    this.filtredprofs= response
      
      this.mesgEmpty=true;
    }


    )
  }

  ngOnInit(): void {
 
    this.doctorsService.getInvts(this.idPat).subscribe((response)=>{
 
      this.mesgEmpty=false;
      this.invts = response
 
      this.filtredprofs=response
      this.mesgEmpty=true;
    })
  }

  filterItem(value) {
    this.invts = this.filtredprofs.filter(i => {
      return (
        i.doctor.name.toLowerCase().includes(value.toLowerCase()) ||
        i.doctor.lastname.toLowerCase().includes(value.toLowerCase()) 

      )
    })
 }
  demande = {patient: "", doctor: ""}

  addDoctor(idPro: any,) {

    this.demande.doctor=idPro
    this.demande.patient=this.idPat
    this.obsAdd= this.DemandeService.AddDoctor(this.demande).subscribe(response=>{
    /*   console.log("demande response "+response.value) */
      this.snackBar.open(" invite sended " ,"×", {

        duration: 5000,

        // here specify the position

        verticalPosition: 'top',
        panelClass:'success'

      });


    },error=> this.snackBar.open(" invite already sended " ,"×", {

      duration: 5000,

      // here specify the position

      verticalPosition: 'top',
      panelClass:'error'

    }))


  }
  details(i){
    /*  console.log(i) */
     this.index=i
     this.pat=(this.invts[i].doctor)
     /*  console.log(this.pat) */
  
       
   }
   acceptInvt(body:any){



      this.doctorsService.acceptInvts(this.idPat,body).subscribe(response=>{
       /*  console.log(response) */
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
          icon: 'success',
          title: 'Invitation acceptée'
        })
        var indexC = this.invts.findIndex(s => s._id === body);

    this.invts.splice (indexC, 1);
    },error=>{
console.log(error)
      const Toast2 = Swal.mixin({
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
      
      Toast2.fire({
        icon: 'error',
        title: 'invitation non acceptée'
      })
    }
      )   

  }
  getId(profDetails:any){
   /*  console.log(profDetails) */

    this.profD=profDetails
  /*   console.log('name'+this.profD.name) */

return profDetails
  }


  ngOnDestroy(): void {
    this.obsGet.unsubscribe


  }

}
