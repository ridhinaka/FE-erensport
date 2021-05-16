import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../services/user-service.service'
import { FormGroup, FormBuilder } from '@angular/forms';
import {User} from '../../models/user.model'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup: FormGroup
  user :any

  constructor(private userServiceService:UserServiceService, private formBuilder:FormBuilder) { 
    this.signup = this.formBuilder.group({
      email:[''],
      password : [''],
      phone: [''],
      default_address: ['']
    })
  }

  ngOnInit(): void {
  }

  registerUser(){
    this.user = this.signup.value
      this.userServiceService.createUser(this.user)
      console.log("yadayada")
  }

}
