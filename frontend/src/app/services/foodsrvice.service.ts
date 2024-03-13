import { Injectable } from '@angular/core';
import { Food } from '../shered/models/foodlist';
import { sample_foods, sample_tags } from '../data';
import { Tag } from '../shered/models/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FOOD_BY_ID_URL,
  FOOD_BY_SEARCH_URL,
  FOOD_BY_TAG_URL,
  FOOD_URL,
  Food_TAG_URL,
} from '../shered/constants/url';

@Injectable({
  providedIn: 'root',
})
export class FoodsrviceService {
  constructor(private http: HttpClient) {}

  //geting All foods
  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOOD_URL);
  }

  //getting search food
  getAllFoodsBySearchTerm(searchTerm: string): Observable<Food[]> {
    return this.http.get<Food[]>(FOOD_BY_SEARCH_URL + searchTerm);
  }

  //get All Tag
  getAllTag(): Observable<Tag[]> {
    return this.http.get<Tag[]>(Food_TAG_URL);
  }

  //get all Food by tag
  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag === 'All'
      ? this.getAll()
      : this.http.get<Food[]>(FOOD_BY_TAG_URL + tag);
  }

  //find food ny id
  getFoodById(foodId: string): Observable<Food> {
    return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
  }
}
