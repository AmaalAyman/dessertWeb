import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DessertsService } from 'src/app/Services/desserts.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent {


  constructor(private _DessertsService:DessertsService, private _Router:Router){}

 signout():void{
  localStorage.removeItem('eToken');
  this._Router.navigate(['/login']);
 }

}
