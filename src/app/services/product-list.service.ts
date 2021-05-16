import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, retry,reduce, pluck,take} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  constructor(private http: HttpClient) { }

  
  getProduct(){
    return this.http.get<any>('https://erensport.herokuapp.com/product').pipe(
      map(res => {
        return res.data
      })
    );
  }
  public getProductDetail(_id:string){
    const id = _id
    return this.http.get<any>('https://erensport.herokuapp.com/product/' + id)
  }
  
}
