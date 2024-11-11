import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dessert } from 'src/app/Interfaces/dessert';
import { BlankLayoutComponent } from 'src/app/Layouts/blank-layout/blank-layout.component';
import { DessertsService } from 'src/app/Services/desserts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cakes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent  implements OnInit{

  heart:boolean = false;
  dessert:Dessert[] = [];
  whislist:Dessert[] = []; 

  constructor(private _BlankLayoutComponent:BlankLayoutComponent, private _DessertsService:DessertsService, private _Renderer2:Renderer2, private _ToastrService:ToastrService){}

ngOnInit(): void {
  this._BlankLayoutComponent.home = false;

  this._DessertsService.getCake().subscribe({
    next:(res)=>{
     this.dessert = res.recipes
        
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


