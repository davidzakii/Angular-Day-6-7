import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { ActivatedRoute } from '@angular/router';
import products from '../../assets/productData.json';
import { ProductType } from '../interfacies/product-type';
import { UsersService } from '../services/users.service';




@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {

  counter  = 0;

  button : boolean = true;

  producDatails : any ;

  constructor(private counterService: CounterService){}

  increaseCounter(){
    this.counterService.setCounterValue(++this.counter)
  }

  decreaseCounter(){
    if(this.counter ==0){
      this.counterService.setCounterValue(0)
    }else{
      this.counterService.setCounterValue(--this.counter)
    }

  }

  delete(i:number){
    this.producDatails.splice(i,0);
  }

  ngOnInit(): void {
    this.counterService.getCounterValue().subscribe(val=>this.counter = val)
    this.producDatails =   this.counterService.getProductList()
  }

}
