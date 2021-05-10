import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { SProductService } from 'src/app/services/s-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product [] = [

  ]
  constructor(private sProductService : SProductService) { }

  ngOnInit(): void {
    this.sProductService.getProduct().subscribe(res => {
      console.log(res)
    })
  }

}
