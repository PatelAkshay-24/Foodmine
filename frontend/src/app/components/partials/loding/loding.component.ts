import { Component } from '@angular/core';
import { LodingserviceService } from 'src/app/services/lodingservice.service';

@Component({
  selector: 'app-loding',
  templateUrl: './loding.component.html',
  styleUrls: ['./loding.component.css'],
})
export class LodingComponent {
  isLoading!: boolean;

  constructor(loadingservice: LodingserviceService) {
    loadingservice.isLoading.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });

    // loadingservice.showLoading()
  }
}
