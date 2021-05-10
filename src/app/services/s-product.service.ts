import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SProductService {
  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get("https://erensport.herokuapp.com/product");
  }  
}


