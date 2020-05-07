import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private productService:ProductService) {
    
   }
   getAllProduct(){
    return this.productService.getAllProduct();
   }

  ngOnInit(): void {
  }

}
