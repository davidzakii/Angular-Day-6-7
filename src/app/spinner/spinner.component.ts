import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.sass']
})
export class SpinnerComponent implements OnInit {

  loader=true;

  constructor(private loaderservice:LoaderService) { }

  ngOnInit(): void {
    this.loaderservice.getloader().subscribe(val=>this.loader=val);
  }

}
