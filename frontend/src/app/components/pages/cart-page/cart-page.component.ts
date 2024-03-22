import { Component } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { Cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!:Cart;

  
  constructor(private cartservice:CartServiceService){
    this.cartservice.getCartObservable().subscribe((cart)=> {
      this.cart =cart;
    })
  }

  //remove item from cart
  removeFromCart(cartItem:CartItem){
    this.cartservice.removeFromCart(cartItem.food.id)
  }

  //change from Cart
  changeQuantityFromCart(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString)
    this.cartservice.changeQuantity(cartItem.food.id,quantity)
  }

}
