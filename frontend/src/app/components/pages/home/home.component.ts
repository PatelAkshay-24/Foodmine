import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodsrviceService } from 'src/app/services/foodsrvice.service';
import { Food } from 'src/app/shared/models/foodlist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods:Food[]=[]

  constructor(private foodservice:FoodsrviceService ,private router :Router,activatedRoute:ActivatedRoute){
    let foodObservable:Observable<Food[]>

    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      foodObservable =this.foodservice.getAllFoodsBySearchTerm(params.searchTerm)
      else if(params.tag)
      foodObservable= this.foodservice.getAllFoodsByTag(params.tag)
      else{
      foodObservable = foodservice.getAll()
        console.log(foodObservable);
      }
     
      foodObservable.subscribe((serverFoods)=>{
        this.foods = serverFoods
      })
    })
  
  }
}
