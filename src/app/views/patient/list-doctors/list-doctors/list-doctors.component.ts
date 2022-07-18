import { Component, OnInit } from '@angular/core';
import { Professionnel } from 'src/app/views/interfaces/professionnel.interface';
import { DoctorsService } from 'src/app/views/services/patient/doctors.service';
import { DemandePatService } from 'src/app/views/services/patient/demande-pat.service';
import { AuthPatientService } from 'src/app/views/services/patient/auth-patient.service';
import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css']
})
export class ListDoctorsComponent implements OnInit {
  profs: Professionnel;
  friend = true;
  idPat: string;
  dataArray:any=[];
  obsGet: Subscription;
  obsAdd: Subscription;
  constructor(public doctorsService: DoctorsService, private authPat: AuthPatientService, private DemandeService: DemandePatService) {
    this.idPat = this.authPat.geid()
 this.obsGet=   this.doctorsService.getDoctors().subscribe(response =>
      this.profs = response



    )

  }

  ngOnInit(): void {
  }

  addDoctor(idPro: any,) {

    console.log()

    this.obsAdd= this.DemandeService.AddDoctor(idPro).subscribe(response=>{
      console.log(response)


    })


  }
  ngOnDestroy(): void {
    this.obsGet.unsubscribe
    this.obsAdd.unsubscribe


  }

}
