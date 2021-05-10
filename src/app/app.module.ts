import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { ShopingComponent } from './shoping/shoping.component';
import { FilterComponent } from './shoping/filter/filter.component';
import { ProductListComponent } from './shoping/product-list/product-list.component';
import { ProductComponent } from './shoping/product-list/product/product.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ShoesProductComponent } from './shoping/product-list/shoes-product/shoes-product.component';
import { BagsProductComponent } from './shoping/product-list/bags-product/bags-product.component';
import { ShuttlecocksProductComponent } from './shoping/product-list/shuttlecocks-product/shuttlecocks-product.component';
import { ApparelProductComponent } from './shoping/product-list/apparel-product/apparel-product.component';
import { CartComponent } from './cart/cart.component';
import { CartContainerComponent } from './cart/cart-container/cart-container.component';
import { CartProductComponent } from './cart/cart-container/cart-product/cart-product.component';
import { CartTotalComponent } from './cart/cart-container/cart-total/cart-total.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductdetailPageComponent } from './productdetail-page/productdetail-page.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ShopingComponent,
    FilterComponent,
    ProductListComponent,
    ProductComponent,
    HomeComponent,
    FooterComponent,
    ShoesProductComponent,
    BagsProductComponent,
    ShuttlecocksProductComponent,
    ApparelProductComponent,
    CartComponent,
    CartContainerComponent,
    CartProductComponent,
    CartTotalComponent,
    LoginComponent,
    SignupComponent,
    ProductdetailPageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
