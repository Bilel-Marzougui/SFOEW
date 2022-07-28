import { Component, OnInit } from '@angular/core';
import { InvitaionsService } from '../../../services/professionnel/invitaions.service';
import { AuthProfessionnelService } from '../../../services/professionnel/auth-professionnel.service';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent implements OnInit {
  id: any;
  invts:any
  contacts:any
  invt:any
  test:true
  constructor(private invservice:InvitaionsService,private authPro: AuthProfessionnelService) {
    this.id = this.authPro.geid()

    this.invservice.getInvts(this.id).subscribe(response =>
      this.invts = response)
      console.log(this.invts)
      
   }

  ngOnInit(): void {
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


  

}
