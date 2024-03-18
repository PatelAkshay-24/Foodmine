import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shered/models/user';
import { IUserLogin } from '../shered/interfaces/IUserLogin';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { USER_LOGIN_URL } from '../shered/constants/url';
import { ToastrService } from 'ngx-toastr';


//userkey define for localstorage
const USER_KEY = 'user';


@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  private userSubject = new BehaviorSubject<User>(
    this.getUserFromLocalStorage()
  );
  public UserObservable: Observable<User>;

  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.UserObservable = this.userSubject.asObservable();
  }

  //Login service
  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      //for toastr
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `welocome to Foodmine ${user.name}!`,
            'Login Successful'
          );
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'login Failed');
        },
      })
    );
  }

  //Logout service
  logout() {
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  //set item in localStorage
  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  //get Item in localStorage
  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}
