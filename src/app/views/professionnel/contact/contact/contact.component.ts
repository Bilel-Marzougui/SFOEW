import { Component, OnInit } from '@angular/core';
import { InvitaionsService } from '../../../services/professionnel/invitaions.service';
import { AuthProfessionnelService } from '../../../services/professionnel/auth-professionnel.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  id: any;
  contacts:any
  p:number;
  i=1;
  filtredContacts:any
  constructor(private invservice:InvitaionsService,private authPro: AuthProfessionnelService) { 
    this.id = this.authPro.geid()

    this.invservice.myContacts(this.id).subscribe(response =>{
      console.log(response)
      this.contacts=response
      this.filtredContacts=response
    }
     
      )
  }

  ngOnInit(): void {
  }
  filterItem(value) {
    this.contacts = this.filtredContacts.filter(i => {
      return (
        i.patients.name.toLowerCase().includes(value.toLowerCase()) ||
        i.patients.lastname.toLowerCase().includes(value.toLowerCase()) 

      )
    })
 }
}
