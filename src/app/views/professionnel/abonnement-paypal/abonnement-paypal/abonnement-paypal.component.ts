import { Component, OnInit } from '@angular/core';
import{PaymentService} from '../../../services/Payment/payment.service'
@Component({
  selector: 'app-abonnement-paypal',
  templateUrl: './abonnement-paypal.component.html',
  styleUrls: ['./abonnement-paypal.component.css']
})
export class AbonnementPaypalComponent implements OnInit {
monthly:any
yearly:any
i=1;
toggle :boolean;
status = ''; 


  constructor( private PaymentService:PaymentService) { 
    
  }

  ngOnInit(): void {
    this.PaymentService.monthlyPrice().subscribe(payment=>{
      this.monthly=payment
      console.log(this.monthly)

    })
    this.PaymentService.yearlyPrice().subscribe(yearly=>{
      console.log(yearly)

      this.yearly=yearly
      console.log(this.yearly)

    })


  }

  enableDisableRule(job) {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'mensuel' : 'annuel';
    console.log(this.status)

}


}
