import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../services/user-service.service'
import { FormGroup, FormBuilder } from '@angular/forms';
import {User} from '../../models/user.model'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[]= [

  ]

  login: FormGroup
  user:any

  constructor(private userServiceService:UserServiceService, private formBuilder:FormBuilder) { 
    this.login = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.userServiceService.getUser().subscribe(dataUser => {
      this.users = dataUser
    })
  }

  loginUser(){
    this.userServiceService.getUser().subscribe(dataUser => {
      this.users = dataUser
      for(let i = 0 ; i < dataUser.length ; i++){
        if(dataUser[i].email !== this.login.value.email && dataUser[i].password !== this.login.value.password){
          Swal.fire('Sorry','your email and password doesnt match','error')
        }else{
          this.userServiceService.loginUser(this.login.value)
        }
      }
    })
  }
}
