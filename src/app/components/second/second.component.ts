import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    type: new FormControl(''),
    id: new FormControl('',[Validators.pattern('[0-9]')]),
    name: new FormControl(''),
    detail: new FormControl(''),
    quanlity: new FormControl('',[Validators.max(50)],),
    price: new FormControl(null),
    
  });
  get id(){
    return this.productForm.get('id');
  }

  get quanlity(){
    return this.productForm.get('quanlity');
  }

  get pricez(){
    return this.productForm.get('price');
  }
  productType: string[] = ['CPU','RAM','HDD','Mainboard'];

  sT($evet){
    if($evet == 0){
      return false;
    }else{
      return true;
    }
    
  }
  constructor() { }

  ngOnInit(): void {
  }

  za(){
    if(this.pricez!=null){
      return "INVALID"
    }else if(this.pricez==null){
      return "VALID"
    }
    }
  

}
