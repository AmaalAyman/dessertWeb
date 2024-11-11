import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBlankComponent } from "../../Components/nav-blank/nav-blank.component";
import {  RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/Components/footer/footer.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [CommonModule, NavBlankComponent, RouterOutlet, FooterComponent, FormsModule],
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.css']
})
export class BlankLayoutComponent {

  constructor(private _Renderer2:Renderer2){}

  home:boolean = true;

  product:any = {name:'iceCream', describtion:'Ice cream is a frozen dessert typically made from milk or cream that has been flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit, such as strawberries or peaches.',img:'../../../assets/Dessert/fruit-ice-cream-flavor-with-copy-space.jpg'}


  checkType(type:any,ele1:HTMLHeadingElement, ele2:HTMLParagraphElement):void{
    if(type == 'pie'){
      this.product = {name:'pie', describtion:'A pie is a baked dish which is usually made of a pastry dough casing that contains a filling of various sweet or savoury ingredients.' ,img:'../../../assets/Dessert/italian-meringue-tartlets-against-light-pink-backdrop.jpg'}
      this._Renderer2.setStyle(ele1, 'color', '#fdb44b');
      this._Renderer2.setStyle(ele2, 'color', '#c24d2c');
    }if(type == 'cake'){
      this.product = {name:'cake', describtion:'Cake is a flour confection made from flour, sugar, and other ingredients and is usually baked.' ,img:'../../../assets/Dessert/overloaded-cake-with-pink-background.jpg'}
      this._Renderer2.setStyle(ele1, 'color', '#7b3c3c');
      this._Renderer2.setStyle(ele2, 'color', '#e8d5b7');
    }if(type == 'iceCream'){
      this.product = {name:'iceCream', describtion:'Ice cream is a frozen dessert typically made from milk or cream that has been flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit, such as strawberries or peaches.',img:'../../../assets/Dessert/fruit-ice-cream-flavor-with-copy-space.jpg'}
      this._Renderer2.setStyle(ele1, 'color', '#a2a8d3');
      this._Renderer2.setStyle(ele2, 'color', '#c3195d');
    }if(type == 'chocolate'){
      this.product = {name:'chocolate', describtion:'Chocolate is a food made from roasted and ground cocoa beans that can be a liquid, solid, or paste, either on its own or as a flavoring in other foods.' ,img:'../../../assets/Dessert/freepik__upload__31268.jpeg'}
      this._Renderer2.setStyle(ele1, 'color', '#f40968');
      this._Renderer2.setStyle(ele2, 'color', '#5c2626');
    }if(type == 'donuts'){
      this.product = {name:'donuts', describtion:'donut is a type of pastry made from leavened fried dough.Doughnuts are usually deep fried from a flour dough, but other types of batters can also be used.' ,img:'../../../assets/Dessert/donuts.jpg'}
      this._Renderer2.setStyle(ele1, 'color', '#f57b51');
      this._Renderer2.setStyle(ele2, 'color', '#fffdfb');
    }
  }

}
