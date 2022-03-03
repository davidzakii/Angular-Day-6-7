import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loader=new BehaviorSubject(true);

  constructor() { }
  getloader(){
    return this.loader;
  }
  setloader(newVal:boolean){
    this.loader.next(newVal);
  }
  hide(){
    this.loader.next(false);
  }
}
