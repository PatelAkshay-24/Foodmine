import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { OrderService } from 'src/app/services/order.service';
import { UserserviceService } from 'src/app/services/userservice.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-check-out-page',
  templateUrl: './check-out-page.component.html',
  styleUrls: ['./check-out-page.component.css']
})
export class CheckOutPageComponent {
order :Order = new Order();
checkoutForm!:  FormGroup;

constructor(private cartService:CartServiceService,
  private userService:UserserviceService,
  private tosterService:ToastrService,
  private formBuilder:FormBuilder,
  private orderService:OrderService,
  private router:Router){
    const cart = cartService.getCart()
    this.order.items = cart.items
    this.order.totalPrice = cart.totalPrice
  }

  ngOnInit():void{
    let {name,address} =  this.userService.currentUser
    this.checkoutForm = this.formBuilder.group({
      name:[name,Validators.required],
      address:[address,Validators.required]
    })
    }

    get fc(){
      return this.checkoutForm.controls
    }

    createOrder(){
      if(this.checkoutForm.invalid){
      this.tosterService.warning('please field the inputs','invalid inputs')
      return;}

      if(!this.order.addressLatLng){
        this.tosterService.warning('Please select your location on the map', 'Location');
        return;
      }
    this.order.name = this.fc.name.value
    this.order.address = this.fc.address.value


    this.orderService.create(this.order).subscribe({
      next:() => {
        this.router.navigateByUrl('/payment-page');
      },
      error:(errorResponse) => {
        this.tosterService.error(errorResponse.error, 'Cart');
      }

   
    })
    console.log(this.order);
    }



  }

