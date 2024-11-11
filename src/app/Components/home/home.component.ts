import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankLayoutComponent } from 'src/app/Layouts/blank-layout/blank-layout.component';
import { DessertsService } from 'src/app/Services/desserts.service';
import { Dessert } from 'src/app/Interfaces/dessert';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  cakes:Dessert[] = [];
  pies:Dessert[]=[];
  chocolates:Dessert[]=[];
  icecream:Dessert[]=[];
  donuts:Dessert[]=[];

constructor(private _BlankLayoutComponent:BlankLayoutComponent, private _DessertsService:DessertsService, private _ToastrService:ToastrService, private _Renderer2:Renderer2){}

  ngOnInit(): void {
    this._BlankLayoutComponent.home = true;
    this.cake();
    this.pie();
    this.chocolate();
    this.iceCream();
    this.donut();

  }

  cake():void{
    this._DessertsService.getCake().subscribe({
      next:(res)=>{
       this.cakes = res.recipes;
   
          
      }
    })
  }

  pie():void{
    this._DessertsService.getPie().subscribe({
      next:(res)=>{
       this.pies = res.recipes;
   
      }
    })
  }

  chocolate():void{
    this._DessertsService.getChocolate().subscribe({
      next:(res)=>{
       this.chocolates = res.recipes;
   
      }
    })
  }

  iceCream():void{
    this._DessertsService.getIceCream().subscribe({
      next:(res)=>{
       this.icecream = res.recipes;
   
      }
    })
  }

  donut():void{
    this._DessertsService.getDount().subscribe({
      next:(res)=>{
       this.donuts = res.recipes;
   
      }
    })
  }

  addCart(product:any):void{
    this._DessertsService.cart.push(product)
    this._ToastrService.success('Dessert Added To Your Cart 🛒');
    console.log( this._DessertsService.cart)
  }
  
  addWishList(product:any, ele:any):void{
    this._DessertsService.wishList.push(product)
    console.log( this._DessertsService.wishList)
    this._ToastrService.success('Dessert Added To Your WishList ❤️');
    this._Renderer2.setStyle(ele , 'color', 'red')
  }

}
