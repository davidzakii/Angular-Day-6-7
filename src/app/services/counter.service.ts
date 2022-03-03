import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject(0);
  private product : any[]=[]
  private productList = new BehaviorSubject(this.product)
  constructor() { }

  getCounterValue(){
    return this.counter;
  }

  setCounterValue(newCounterVal : number){
    this.counter.next(newCounterVal)
  }

  getProductList(){
    return this.productList
  }

  setProductList(newProduct : any){
    this.productList.next(newProduct)
  }





}
