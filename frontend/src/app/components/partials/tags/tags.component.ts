import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodsrviceService } from 'src/app/services/foodsrvice.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?:Tag[];
  
  constructor(foodservice:FoodsrviceService){
    foodservice.getAllTag().subscribe((serverTags)=>{
      this.tags = serverTags
    })
  }
}