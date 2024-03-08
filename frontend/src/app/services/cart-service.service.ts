import { Injectable } from '@angular/core';
import { Cart } from '../shered/models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shered/models/foodlist';
import { CartItem } from '../shered/models/cartitem';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  private cart: Cart =this.getCartFromLocalStorage()
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() {}

  //Add Item In Cart
  addToCart(food: Food) {
    let cartItem = this.cart.items.find((item) => item.food.id === food.id);
    if (cartItem) return;
    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage()
  }

  //Remove Item in Cart
  removeFromCart(foodId: string) {
    this.cart.items = this.cart.items.filter((item) => item.food.id !== foodId);
    this.setCartToLocalStorage()
  }

  //Change Item Quantity
  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage()
  }

  //Clear Cart
  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage()
  }

  //Cart Observable
  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
    
  }

  //set cart to Local Storage
  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price,
      0
    );
    this.cart.totalCount = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantity,
      0
    );
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart)
  }

  //get Cart From LocalStorage
  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart')
    return cartJson?JSON.parse(cartJson): new Cart()
  }

  
}
