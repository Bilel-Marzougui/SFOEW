import { Component, OnInit } from '@angular/core';
import { Professionnel } from 'src/app/views/interfaces/professionnel.interface';
import { DoctorsService } from 'src/app/views/services/patient/doctors.service';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css']
})
export class ListDoctorsComponent implements OnInit {
  profs:Professionnel
  friend=true
  constructor(public  doctorsService:DoctorsService) {
    this.doctorsService.getDoctors().subscribe(response=>
      this.profs = response
      )
      console.log(this.profs)

  }

  ngOnInit(): void {
  }
  addDoctor(){}

}
