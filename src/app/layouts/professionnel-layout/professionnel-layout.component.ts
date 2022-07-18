import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professionnel } from 'src/app/views/interfaces/professionnel.interface';
import { AuthProfessionnelService } from 'src/app/views/services/professionnel/auth-professionnel.service';
import { UpdProfilProServiceService } from 'src/app/views/services/professionnel/upd-profil-pro-service.service';

@Component({
  selector: 'app-professionnel-layout',
  templateUrl: './professionnel-layout.component.html',
  styleUrls: ['./professionnel-layout.component.css']
})
export class ProfessionnelLayoutComponent implements OnInit {
  professionnel:Professionnel
  updPatient:Professionnel
  submitted = false;
  hide : boolean = true;
  test:Professionnel
  id:any

  dataProf={
    name:'',
    lastname:'',
    email:'',
    birthday:0,
    tel:0,
    id:'',
    adresse:'',
    fax:'',
    gender:'',
    photo:'',
    job:'',
    rpps:'',
    added_date:'',
    adeli:'',


  }
  constructor(private router:Router,private updateservice:UpdProfilProServiceService, private authPro:AuthProfessionnelService) {
    this.id=this.authPro.geid()
    this.professionnel=this.authPro.getUsername()

    this.updateservice.getProf(this.id).subscribe(response=>
      this.dataProf = response)
  }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/loginuser'])
  }
}
