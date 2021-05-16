import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../services/user-service.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public userServiceService:UserServiceService) { }

  ngOnInit(): void {
  }

  isLogout(){
    this.userServiceService.logout()
    Swal.fire('See you','youre logged out','success')
  }
}
