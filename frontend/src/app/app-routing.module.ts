
import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckOutPageComponent } from './components/pages/check-out-page/check-out-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { PaymentSuccessComponent } from './components/pages/payment-success/payment-success.component';
import { OrderTrakingComponent } from './components/pages/order-traking/order-traking.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'tags/:tag',component:HomeComponent},
  {path:'food/:id',component:FoodPageComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'login-page',component:LoginPageComponent},
  {path:'register-page',component:RegisterPageComponent},
  {path:'checkout-page',component:CheckOutPageComponent, canActivate:[AuthGuard]},
  {path:'payment-page',component:PaymentPageComponent, canActivate:[AuthGuard]},
  {path:'payment-success',component:PaymentSuccessComponent, canActivate:[AuthGuard]},
  {path:'track/:orderId',component:OrderTrakingComponent, canActivate:[AuthGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
