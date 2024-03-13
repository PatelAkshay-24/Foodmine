import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { FoodsrviceService } from 'src/app/services/foodsrvice.service';
import { Food } from 'src/app/shered/models/foodlist';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent {
  food!: Food;

  constructor(activatedroute: ActivatedRoute,private cartService:CartServiceService, foodservice: FoodsrviceService,private router:Router) {
    activatedroute.params.subscribe((params) => {
      if (params.id) 
      foodservice.getFoodById(params.id).subscribe((serverFood)=>{
        this.food = serverFood
      });
    });
  }

  addToCart(){
    this.cartService.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }
  goBack(){
    this.router.navigate(['home'])
  }
}
