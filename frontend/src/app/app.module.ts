import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component'
import { TextInputComponent } from './components/partials/text-input/text-input.component';
import {InputValidationComponent} from './components/partials/input-validation/input-validation.component';
import {InputContainerComponent} from './components/partials/input-container/input-container.component';
import { LodingComponent } from './components/partials/loding/loding.component';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { CheckOutPageComponent } from './components/pages/check-out-page/check-out-page.component';
import { OrderItemsListComponent } from './components/partials/order-items-list/order-items-list.component';
import { MapComponent } from './components/partials/map/map.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { PaypalButtonComponent } from './components/partials/paypal-button/paypal-button.component';

@NgModule({
  declarations: [
    TextInputComponent,
    InputValidationComponent,
    InputContainerComponent,
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    RegisterPageComponent,
    LodingComponent,
    CheckOutPageComponent,
    OrderItemsListComponent,
    MapComponent,
    PaymentPageComponent,
    PaypalButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true,
     
    },
    {
      provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
