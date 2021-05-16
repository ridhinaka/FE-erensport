import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {}

  createOrdertoCart(cart_id:string, user_id:string){
    return this.http.post<any>('https://erensport.herokuapp.com//order/create', { 
      cart_id: cart_id,
      user_id: user_id
    }).subscribe(res =>{
      console.log("berhasil euy")
    })
  }
}
