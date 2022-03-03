import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CounterService } from '../services/counter.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  productItem: any;

  counter : any;

  constructor(private router:Router,private counterService:CounterService,private usersevice:UsersService) { }

  cardClick(){
    console.log(this.productItem)
    this.router.navigate(['/product-datails',this.productItem.id])
  };

  ngOnInit(): void {
    this.counter = this.counterService.getCounterValue();
    this.productItem = this.usersevice.getproductList();
  }

}
