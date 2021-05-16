import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product.model'
import {ProductListService} from '../../../services/product-list.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 
  }
  

}
