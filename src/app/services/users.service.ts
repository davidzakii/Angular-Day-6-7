import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { };

  getproductList():Observable<any>{
    return this.http.get<any>(`https://fakestoreapi.com/products`)
  }

  getUsersList(id:number){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }

}
