import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Cart} from 'src/app/models/cart.model';
import {SCartService} from '../../../../services/s-cart.service'
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {User} from '../../../../models/user.model'
import {OrderService} from '../../../../services/order.service'


@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CartProductComponent implements OnInit {
  carts : Cart[] = [
  ];
  _id$:any

  constructor(private sCartService: SCartService,private orderService:OrderService, private toastr:ToastrService) { 
    
  }

  ngOnInit(): void {
    this.getAllCart()
  }
  getAllCart(){
    this.sCartService.getCart().subscribe(cartData => {
      console.log(cartData)
      this.carts = cartData
    });
  }
  deleteCart(_id:string){
    this.sCartService.deleteCart(_id).subscribe((cartData) => {
      this.getAllCart()
    })  
  }
  deleteAllCart(){
    this.sCartService.deleteAllCart().subscribe(res => {
      console.log(res)
    })
  }
  showToatr(){
    this.toastr.show('your product have been removed!','Congratulations',{
      timeOut:1000,
      progressBar:false
    })
  }

  // createOrder(cart_id:any, user_id:any){
  //   this.orderService.createOrdertoCart(cart_id,"asd")
  // }
}
