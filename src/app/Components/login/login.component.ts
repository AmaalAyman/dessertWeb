import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _FormBuilder:FormBuilder, private _AuthService:AuthService, private _Router:Router){}

  errormsg:string = '';
  isLoading:boolean = false;

  loginForm:FormGroup = this._FormBuilder.group({
    email:['',[Validators.email,Validators.required]],
    password:['',[Validators.required,Validators.pattern(/^\w{6,10}$/)]],
  });


  handleForm():void{
    const userData = this.loginForm.value;
    this._AuthService.userEmail = this.loginForm.value.email;
    this._AuthService.userPassword = this.loginForm.value.password;
    this.isLoading = true; 
   
    if(this.loginForm.valid == true){
     this._AuthService.login(userData).subscribe({
       next:(res)=> {
         if(res.message == 'success'){
            this.isLoading = false;
            localStorage.setItem('eToken', res.token);
            this._AuthService.saveUserData();
             this._Router.navigate(['/home']);
         }
       },
       error:(err)=>{
         this.isLoading = false;
         this.errormsg = err.error.message;
       }
     })
     }
    }
}
