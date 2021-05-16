import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Cart} from '../models/cart.model'
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry,reduce, pluck,take} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SCartService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  getCart(){
    return this.http.get <any>('https://erensport.herokuapp.com/allcart',{headers:this.headers}).pipe(
      map(res => {
        console.log(res)
        return res.data
      })
    );
  }
  public deleteCart (_id:string){
    const id = _id
    return this.http.delete<any>(`https://erensport.herokuapp.com/cart/${id}`)
  }

  public deleteAllCart (){
    return this.http.delete<any>('https://erensport.herokuapp.com/cart/delete')
  }
}
