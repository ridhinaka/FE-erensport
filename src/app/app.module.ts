import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { FilterComponent } from './component/home/filter/filter.component';
import { ProductListComponent } from './component/home/product-list/product-list.component';
import { ProductComponent } from './component/home/product-list/product/product.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CartComponent } from './component/cart/cart.component';
import { CartContainerComponent } from './component/cart/cart-container/cart-container.component';
import { CartProductComponent } from './component/cart/cart-container/cart-product/cart-product.component';
import { CartTotalComponent } from './component/cart/cart-total/cart-total.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ProductdetailPageComponent } from './component/productdetail-page/productdetail-page.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthService} from './services/auth.service';
import { OrderComponent } from './component/order/order.component';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FilterComponent,
    ProductListComponent,
    ProductComponent,
    HomeComponent,
    FooterComponent,
    CartComponent,
    CartContainerComponent,
    CartProductComponent,
    CartTotalComponent,
    LoginComponent,
    SignupComponent,
    ProductdetailPageComponent,
    OrderComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      preventDuplicates:true
    })

  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
