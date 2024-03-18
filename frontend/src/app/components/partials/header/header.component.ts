import { Component } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { UserserviceService } from 'src/app/services/userservice.service';
import { User } from 'src/app/shered/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartQyuantity = 0;
  user!: User;
  constructor(
    private cartservice: CartServiceService,
    private userservice: UserserviceService
  ) {
    cartservice.getCartObservable().subscribe((newCart) => {
      this.cartQyuantity = newCart.totalCount;
    });

    userservice.UserObservable.subscribe((newUser) => {
      this.user = newUser;
    });
  }

  //logout buttton
  logout() {
    this.userservice.logout();
  }

  //auth for dropDown
  get isAuth() {
    return this.user.token;
  }
}
