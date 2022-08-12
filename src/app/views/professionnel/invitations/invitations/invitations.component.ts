import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { InvitaionsService } from '../../../services/professionnel/invitaions.service';
import { AuthProfessionnelService } from '../../../services/professionnel/auth-professionnel.service';

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
  constructor(private invservice:InvitaionsService,private authPro: AuthProfessionnelService) {
    this.id = this.authPro.geid()

  
     
    
      console.log(this.invts)
      
   }

  ngOnInit(): void {
    this.invservice.getInvts(this.id).subscribe(response =>{
      this.invts = response
      this.filtredInvts=response
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
 

  

}
