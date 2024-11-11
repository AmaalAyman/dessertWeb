import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dessert } from '../Interfaces/dessert';

@Injectable({
  providedIn: 'root'
})
export class DessertsService {

  constructor(private _HttpClient:HttpClient) { }


  product:any;
  cart:Dessert[] = [];
  wishList:Dessert[] = [];


  getPie():Observable<any>{
    return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=pie');
 }

 getDount():Observable<any>{
  return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=donuts');
}

getIceCream():Observable<any>{
  return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=ice cream');
}

getCake():Observable<any>{
  return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=cake');
}

getChocolate():Observable<any>{
  return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=chocolate');
}



}
