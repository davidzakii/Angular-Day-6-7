import { Component, OnInit } from '@angular/core';
import products from '../../assets/productData.json';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-product-datails',
  templateUrl: './product-datails.component.html',
  styleUrls: ['./product-datails.component.sass']
})
export class ProductDatailsComponent implements OnInit {
  producDatails : any;
  activeId : number;
  constructor(private activatedRout : ActivatedRoute,private usersService:UsersService) {
    this.activeId= this.activatedRout.snapshot.params['id'];
    // this.producDatails = products.find(pro => pro.id == activId);
   }

  ngOnInit(): void {
    this.usersService.getUsersList(this.activeId).subscribe(res=>{this.producDatails=res})
  }

}
