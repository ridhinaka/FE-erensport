import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';
import {User} from '../models/user.model'
import {Router} from '@angular/router';
import Swal from 'sweetalert2'
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http: HttpClient, private router:Router) { }

  createUser(user:User){
    return this.http.post<any>('https://erensport.herokuapp.com/user/create', user).subscribe(res => {
      Swal.fire('Directing','to login page','success')
      this.router.navigate(['login'])
    })
  }
  getUser(){
    return this.http.get<any>('https://erensport.herokuapp.com/user').pipe(map(res => {
      console.log(res)
      return res.data
    }))
  }
  loginUser(user:User){
    return this.http.post<any>('https://erensport.herokuapp.com/user/login',user).subscribe(res => {
      localStorage.setItem('accessToken', res.accessToken);
      Swal.fire('Welcome','to erenSport','success')
      this.router.navigate(['']);
    })
  }
  logout() {
    let clearToken = localStorage.removeItem('accessToken');
    if (clearToken == null){
      this.router.navigate(['']);
    } 
  }
  getToken() {
    return localStorage.getItem('accessToken');
  }
  get isLogin() {
    let token = localStorage.getItem('accessToken');
    if(token != null) {
      return true
    }
    else return false
  }
}
