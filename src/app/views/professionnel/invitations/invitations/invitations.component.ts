import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { InvitaionsService } from '../../../services/professionnel/invitaions.service';
import { AuthProfessionnelService } from '../../../services/professionnel/auth-professionnel.service';
import{PatientDataService} from '../../../services/shared-data/patient-data.service'
import { UpdProfilPatientService } from 'src/app/views/services/patient/upd-profil-patient.service';

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

  pat={

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
    added_date: '2022-05-26T09:50:18.419+00:00',
    _id:""
  
  }
  constructor(private updateservice:UpdProfilPatientService,private invservice:InvitaionsService,private authPro: AuthProfessionnelService ,private PatData:PatientDataService ) {
    this.id = this.authPro.geid()

  
     
    
      console.log(this.invts)
      
   }

  ngOnInit(): void {
    this.invservice.getInvts(this.id).subscribe(response =>{
      this.mesgEmpty=false;

      this.invts = response
      this.filtredInvts=response
      this.mesgEmpty=true;

      console.log( this.invts) 

    })
  }


  ngOnChanges(value) {
    this.filterItem(value)
  }
  filterItem(value) {
    this.invts = this.filtredInvts.filter(i => {
      return (
        i.patient.name.toLowerCase().includes(value.toLowerCase()) 
        
      )
    })
console.log( this.invts) 
 }
  inv(){
    if (this.invts.status== false) {
      this.invt=this.invts
      console.log(this.invt)
      }
      else if (this.invts.status==true){
 this.contacts=this.invts
      }

  }
  
getIdPat(idPat){
this.PatData.GetId(idPat)
}

onMouseEnter(event: any): void {
  event.target.click();
  
  
}
details(i){
  console.log(i)
  this.index=i
  this.pat=(this.invts[i].patient)
  console.log(this.pat)
console.log(this.pat.name)
    
}

}
