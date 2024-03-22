import { Food } from "./foodlist";

export class CartItem{
    constructor(public food:Food){}
    quantity:number=1;
    price:number=this.food.price
}