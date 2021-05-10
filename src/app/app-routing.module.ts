import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component'
import {CartComponent} from '../app/cart/cart.component'
import {LoginComponent} from '../app/login/login.component'
import {SignupComponent} from '../app/signup/signup.component'
import {ProductdetailPageComponent} from '../app/productdetail-page/productdetail-page.component'


const routes: Routes = [
  {path : "", redirectTo:'/home' , pathMatch: "full"},
  {path : 'login', component: LoginComponent},
  {path : 'home',component:HomeComponent},
  {path: 'cart', component:CartComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'productdetail',component:ProductdetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
