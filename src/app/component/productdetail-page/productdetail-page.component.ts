import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Product} from '../../models/product.model'
import { ToastrService } from 'ngx-toastr';
import {UserServiceService} from '../../services/user-service.service'
import {ProductListService} from '../../services/product-list.service'
import {SProductService} from '../../services/s-product.service'

@Component({
  selector: 'app-productdetail-page',
  templateUrl: './productdetail-page.component.html',
  styleUrls: ['./productdetail-page.component.css']
})
export class ProductdetailPageComponent implements OnInit {
  products : Product[] = []
  _id:any
  data: any;
  constructor(private ProductListService:ProductListService, private route:ActivatedRoute, private sProductService: SProductService,private toastr:ToastrService, public userServiceService:UserServiceService) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['id']
    this.getOne()
    
  }
  getOne(){
    this.ProductListService.getProductDetail(this._id).subscribe(data => {
      this.data = data
      console.log(this.data)
    })
  }
  clickAddtoCart(_id: any, quantity: any) {
    this.sProductService.addToCart(_id, 1);
  }

  showToatr(){
    this.toastr.success('your product have been added to cart!','Congratulations',{
      timeOut:1000,
      progressBar:false
    })
  }
}
