import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankLayoutComponent } from 'src/app/Layouts/blank-layout/blank-layout.component';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{


  constructor(private _BlankLayoutComponent:BlankLayoutComponent, private _AuthService:AuthService){}
  
  name:string = '';
  email:string = '';
  password:string = '';
  passlen:number[] = [1,2,3,4,5,6,7,8,9,10];

  ngOnInit(): void {
    this._BlankLayoutComponent.home = false;

    this._AuthService.saveUserData();

    this.name = this._AuthService.userData.name;
    this.email = this._AuthService.userEmail;
    this.password = this._AuthService.userPassword;
  }

}
