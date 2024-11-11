import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankLayoutComponent } from 'src/app/Layouts/blank-layout/blank-layout.component';
import { DessertsService } from 'src/app/Services/desserts.service';
import { Dessert } from 'src/app/Interfaces/dessert';
import { AuthService } from 'src/app/Services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  viewCart:Dessert[] = [];
  price:any[] = [];
  totalPrice:number = 0;
  userName:string = '';

  constructor(private _BlankLayoutComponent:BlankLayoutComponent, private _DessertsService:DessertsService, private _AuthService:AuthService, private _ToastrService:ToastrService){}

ngOnInit(): void {
  this._BlankLayoutComponent.home = false;
  this._AuthService.saveUserData();
  this.userName = this._AuthService.userData.name;

  this.viewCart = this._DessertsService.cart;

  for(let i=0; this.viewCart[i]; i++){
    this.price.push((this.viewCart[i].social_rank/0.7).toString().slice(5,8));
   }

   for(let i=0; this.price[i]; i++){
     this.totalPrice = this.totalPrice + parseInt(this.price[i]);
    }
}

deleteAll():void{
  this._DessertsService.cart = [];
  this.viewCart = this._DessertsService.cart;
  this.totalPrice = 0;
  this._ToastrService.error('All Desserts Deleted From Your Cart 🛒');
}

deleteItem(id:string):void{
  const cartArray = this._DessertsService.cart;
  for(let i=0; cartArray[i]; i++){
    if(cartArray[i].recipe_id == id){
       cartArray.splice(i,1);
      console.log(cartArray);
      this._ToastrService.error('Dessert Deleted From Your Cart 🛒');
    }
    }
    this.viewCart = cartArray;
    this.totalPrice = 0;
    this.price = [];

    for(let i=0; this.viewCart[i]; i++){
      this.price.push((this.viewCart[i].social_rank/0.7).toString().slice(5,8));
     }
  
     for(let i=0; this.price[i]; i++){
       this.totalPrice = this.totalPrice + parseInt(this.price[i]);
      }

  }

}


