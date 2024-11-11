import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavAuthComponent } from "../../Components/nav-auth/nav-auth.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [CommonModule, NavAuthComponent, RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent {


}
