import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-auth',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-auth.component.html',
  styleUrls: ['./nav-auth.component.css']
})
export class NavAuthComponent {

  textCheck:boolean = true;

  check():void{
     this.textCheck = false;
  }

}
