import { Component, OnInit } from '@angular/core';
import productData from '../../assets/productData.json';
import { ProductType } from '.././interfacies/product-type'
import { CounterService } from '../services/counter.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.sass']
})
export class ProductCardListComponent implements OnInit {

  productDatails : any;

  constructor(private userService : UsersService,private counterService: CounterService) { }

  ngOnInit(): void {
    this.userService.getproductList().subscribe((res)=> {
      this.productDatails=res
      // console.log(res)
    },
    (err)=>console.log(err)
    );
  }

  handleData(event : any){

  }

}
