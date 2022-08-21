import { Component, OnInit } from '@angular/core';
import { AuthProfessionnelService } from 'src/app/views/services/professionnel/auth-professionnel.service';
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
price2=0
price1=0
id:any

  constructor( public  authPrp:AuthProfessionnelService,private PaymentService:PaymentService) { 
    this.id=this.authPrp.geid()

  }

  ngOnInit(): void {
    this.PaymentService.monthlyPrice().subscribe(payment=>{
      this.monthly=payment
      this.price1 =this.monthly[0].prix
      console.log(this.monthly)
      console.log(this.price1)

    })
    this.PaymentService.yearlyPrice().subscribe(yearly=>{
      console.log(yearly)

      this.yearly=yearly
      this.price2 =this.yearly[0].prix
      console.log(this.yearly)
      console.log(this.price2)

    })


  }


  payment2={

    "intent": "sale",

    "payer": {

        "payment_method": "paypal"

    },

    "redirect_urls": {

        "return_url": `http://localhost:3000/paypal/success/62988cc89705e81dbc08e45b/${this.price2}/'USD'/${true}`,

        "cancel_url": "http://185.104.172.119:3000/paypal/cancel"

    },

    "transactions": [{

        "item_list": {

            "items": [{

                "name": "item",

                "sku": "item",

                "price": this.price2,

                "currency": "USD",

                "quantity": 1

            }]

        },

        "amount": {

            "currency": "USD",

            "total": this.price2

        },

        "description": "This is the payment description."

    }]

}


payment1={

  "intent": "sale",

  "payer": {

      "payment_method": "paypal"

  },

  "redirect_urls": {

      "return_url": `http://localhost:3000/paypal/success/62988cc89705e81dbc08e45b/${23.55}/'USD'/${true}`,

      "cancel_url": "http://185.104.172.119:3000/paypal/cancel"

  },

  "transactions": [{

      "item_list": {

          "items": [{

              "name": "item",

              "sku": "item",

              "price":23.55,

              "currency": "USD",

              "quantity": 1

          }]

      },

      "amount": {

          "currency": "USD",

          "total": 23.55

      },

      "description": "This is the payment description."

  }]

}
  enableDisableRule(job) {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'mensuel' : 'annuel';

    console.log(this.status)

}
pay(){
  console.log(this.id)
 if(this.status=="annuel"){

  console.log(this.payment2)
    this.PaymentService.pay(this.id,this.payment1).subscribe(response=>{
      console.log(this.price2)

      console.log(response)

      window.location.href=response.url;

    })

 }
 else if(this.status=="mensuel"){
  this.PaymentService.pay(this.id,this.payment1).subscribe(response=>{
    console.log(this.price1)

    console.log(response)
    window.location.href=response.url;

    
  })

 }

}

}
