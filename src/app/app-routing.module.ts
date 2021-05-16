import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component'
import {CartComponent} from './component/cart/cart.component'
import {LoginComponent} from './component/login/login.component'
import {SignupComponent} from './component/signup/signup.component'
import {ProductdetailPageComponent} from './component/productdetail-page/productdetail-page.component'
import {OrderComponent} from './component/order/order.component'


const routes: Routes = [
  {path : '', redirectTo:'/home' , pathMatch: "full"},
  {path : 'login', component: LoginComponent},
  {path : 'home',component:HomeComponent},
  {path: 'cart', component:CartComponent},
  {path: 'cart/:id', component:CartComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'productdetail/:id',component:ProductdetailPageComponent},
  {path: 'order',component:OrderComponent},
  {path: '**',redirectTo:'/home', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
