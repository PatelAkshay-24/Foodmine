import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodsrviceService } from 'src/app/services/foodsrvice.service';
import { Food } from 'src/app/shered/models/foodlist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods:Food[]=[]

  constructor(private foodservice:FoodsrviceService ,private router :Router,activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.foods =this.foodservice.getAllFoodsBySearchTerm(params.searchTerm)
      else if(params.tag)
      this.foods = this.foodservice.getAllFoodsByTag(params.tag)
      else
      this.foods = foodservice.getAll()
    })
   
  }

}
