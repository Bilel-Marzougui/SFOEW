import { Component, OnInit } from '@angular/core';
import { Professionnel } from 'src/app/views/interfaces/professionnel.interface';
import { DoctorsService } from 'src/app/views/services/patient/doctors.service';
import { DemandePatService } from 'src/app/views/services/patient/demande-pat.service';
import { AuthPatientService } from 'src/app/views/services/patient/auth-patient.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { MatSnackBar } from '@angular/material/snack-bar';
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


  mesgEmpty: boolean=false;
  constructor(private snackBar:MatSnackBar,public doctorsService: DoctorsService, private authPat: AuthPatientService, private DemandeService: DemandePatService) {
    this.idPat = this.authPat.geid()
 this.obsGet=   this.doctorsService.getDoctors().subscribe(response =>{
  this.mesgEmpty=false;

  
      this.profs = response
      this.filtredprofs= response
      this.mesgEmpty=true;
    }


    )
  }

  ngOnInit(): void {
    
  }

  filterItem(value) {
    this.profs = this.filtredprofs.filter(i => {
      return (
        i.name.toLowerCase().includes(value.toLowerCase()) ||
        i.lastname.toLowerCase().includes(value.toLowerCase()) 

      )
    })
 }
  demande = {patient: "", doctor: ""}

  addDoctor(idPro: any,) {

    this.demande.doctor=idPro
    this.demande.patient=this.idPat
    this.obsAdd= this.DemandeService.AddDoctor(this.demande).subscribe(response=>{
      console.log("demande response "+response.value)
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
  

  getId(profDetails:any){
    console.log(profDetails)

    this.profD=profDetails
    console.log('name'+this.profD.name)

return profDetails
  }


  ngOnDestroy(): void {
    this.obsGet.unsubscribe


  }

}
