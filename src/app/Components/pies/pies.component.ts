import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankLayoutComponent } from 'src/app/Layouts/blank-layout/blank-layout.component';
import { DessertsService } from 'src/app/Services/desserts.service';
import { Dessert } from 'src/app/Interfaces/dessert';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-pies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pies.component.html',
  styleUrls: ['./pies.component.css']
})
export class PiesComponent implements OnInit{

  dessert:Dessert[] = [];

  constructor(private _BlankLayoutComponent:BlankLayoutComponent, private _DessertsService:DessertsService, private _Renderer2:Renderer2, private _ToastrService:ToastrService){}

ngOnInit(): void {
  this._BlankLayoutComponent.home = false;

  this._DessertsService.getPie().subscribe({
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
