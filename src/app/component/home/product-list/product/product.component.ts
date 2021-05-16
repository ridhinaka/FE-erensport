import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { SProductService } from 'src/app/services/s-product.service';
import {UserServiceService} from 'src/app/services/user-service.service'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private sProductService: SProductService,  private toastr:ToastrService, public userServiceService:UserServiceService) {}

  ngOnInit(): void {
    this.sProductService.getProduct().subscribe(productData => {
      this.products = productData;
    });
  }

  clickAddtoCart(product_id: any, quantity: any) {
    this.sProductService.addToCart(product_id, 1);
  }

  showToatr(){
    this.toastr.success('your product have been added to cart!','Congratulations',{
      timeOut:1000,
      progressBar:false
    })
  }

}
