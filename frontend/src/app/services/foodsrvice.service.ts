import { Injectable } from '@angular/core';
import { Food } from '../shered/models/foodlist';
import { sample_foods, sample_tags } from '../data';
import { Tag } from '../shered/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodsrviceService {

  constructor() { }

  //geting All foods
  getAll():Food[]{
    return sample_foods;
  }

  //getting search food
  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  //get All Tag
  getAllTag():Tag[]{
    return sample_tags;
  }

  //get all Food by tag
  getAllFoodsByTag(tag:string):Food[]{
    return tag == "All"?
    this.getAll():
    this.getAll().filter(food=>food.tags?.includes(tag))
  }
}
