import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DessertsService } from 'src/app/Services/desserts.service';
import { Dessert } from 'src/app/Interfaces/dessert';
import { BlankLayoutComponent } from 'src/app/Layouts/blank-layout/blank-layout.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit{

  wishList:Dessert[]=[];


  constructor(private _DessertsService:DessertsService, private _BlankLayoutComponent:BlankLayoutComponent, private _Renderer2:Renderer2,  private _ToastrService:ToastrService){}

  ngOnInit(): void {
    
    this._BlankLayoutComponent.home = false;
   this.wishList = this._DessertsService.wishList;
  }



check():boolean{
  if(this.wishList.length == 0){
    return true;
  }else{
    return false;
  }
}

addCart(product:any):void{
  this._DessertsService.cart.push(product)
  console.log( this._DessertsService.cart)
}

deleteWishList(id:string):void{
  const WishListArray = this._DessertsService.wishList;
  for(let i=0; WishListArray[i]; i++){
    if(WishListArray[i].recipe_id == id){
      WishListArray.splice(i,1);
      console.log(WishListArray);
      this._ToastrService.error('Dessert Deleted From Your WishList ❤️');
    }
    }
}

deleteWishListAll():void{
  this._DessertsService.wishList = [];
  this.wishList = this._DessertsService.wishList;
  this._ToastrService.error('All Desserts Deleted From Your WishList ❤️');
}

}
