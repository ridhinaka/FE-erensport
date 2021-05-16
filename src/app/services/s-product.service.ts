import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SProductService {
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<any>('https://erensport.herokuapp.com/product').pipe(
      map(res => {
        return res.data || {};
      })
    );
  }

  addToCart(product_id: string, quantity: number) {
    return this.http.post<any>('https://erensport.herokuapp.com/cart/push', {
      product_id: product_id,
      quantity: quantity
    }).subscribe();
  }
}

