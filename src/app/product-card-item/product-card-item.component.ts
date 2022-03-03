import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductType } from '../interfacies/product-type';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-product-card-item',
  templateUrl: './product-card-item.component.html',
  styleUrls: ['./product-card-item.component.sass']
})
export class ProductCardItemComponent implements OnInit {

  @Input() productItem :any;

  //:ProductType = {
  //   "id": 0,
  //   "title": "",
  //   "price": 0,
  //   "description": "",
  //   "category": "",
  //   "image": "",
  //   "rating": {
  //     "rate": 0,
  //     "count": 0
  //   }
  // };

  productDatail : object[] = [];

  @Output() childData : EventEmitter<any> = new EventEmitter();

  cardClick(){
    this.router.navigate(['/product-datails',this.productItem.id])
  };

  counter = 0;

  constructor(private router : Router,private counterService : CounterService) { }

  increaseCounter(){
  //  this.childData.emit()
  this.counterService.setCounterValue(++this.counter)
    // this.childData.emit(this.productDatail.push(this.productItem))
    this.router.navigate(['/counter',this.productItem.id])
  }

  ngOnInit(): void {
    this.counterService.getCounterValue().subscribe(val=>console.log(val))
  }

}
