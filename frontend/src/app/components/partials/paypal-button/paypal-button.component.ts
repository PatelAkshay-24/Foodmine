import { Component, Input } from '@angular/core';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css']
})
export class PaypalButtonComponent {
@Input()
order!:Order
   
constructor() { }
handler:any = null;
ngOnInit() {
  this.loadStripe();
}

pay(amount: any) {    

  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51Ozeq2SCAxCXHn3VrnMNDSRY83X0zDZnX0Oa8vjWp4v3NZcEHbF0qUN51xOjOZn7DQ5Xnv4e2mWC8QtH3GZxTc3G00NntabWhY',
    locale: 'auto',
    token: function (token: any) {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      console.log(token)
      alert('Token Created!!');

    }
  });

  handler.open({
    name: 'Pyament Gateway',
    description: 'Pay Your Food Bill',
    amount: amount * 100
  });

}

loadStripe() {
   
  if(!window.document.getElementById('stripe-script')) {
    var s = window.document.createElement("script");
    s.id = "stripe-script";
    s.type = "text/javascript";
    s.src = "https://checkout.stripe.com/checkout.js";
    s.onload = () => {
      this.handler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51Ozeq2SCAxCXHn3VrnMNDSRY83X0zDZnX0Oa8vjWp4v3NZcEHbF0qUN51xOjOZn7DQ5Xnv4e2mWC8QtH3GZxTc3G00NntabWhY',
        locale: 'auto',
        token: function (token: any) {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
          console.log(token)
          alert('Payment Success!!');
        }
      });
    }
     
    window.document.body.appendChild(s);
  }
}
}


