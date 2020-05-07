import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  counter:number = 0;

  getCounter(){
    return this.counter;
  }

  add(p_id: number){
    console.log('Add product id: '+p_id+' to cart');
    //this.cart.push(this.productsService.getSomeProduct(p_id));
    //this.sumPrice += this.productsService.getSomeProduct(p_id).p_price;
    this.counter = 0;
  }
}
