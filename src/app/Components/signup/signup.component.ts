import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  errormsg:string = '';
  isLoading:boolean = false;

constructor(private _FormBuilder:FormBuilder, private _AuthService:AuthService, private _Router:Router){}

signupForm:FormGroup = this._FormBuilder.group({
  name:['',[Validators.required, Validators.minLength(3) , Validators.maxLength(20)]],
  email:['',[Validators.email,Validators.required]],
  password:['',[Validators.required,Validators.minLength(6),Validators.pattern(/^\w{6,10}$/)]],
  rePassword:[''],
  phone:['',[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]]

}, {validators:[this.confirmPassword]} as FormControlOptions);

confirmPassword(group:FormGroup):void{
  let password = group.get('password');
  let rePassword = group.get('rePassword');


  if(rePassword?.value == null || ''){
    rePassword?.setErrors({ required: true})
  }else if(password?.value != rePassword?.value)
   rePassword?.setErrors({ misMatch: true })
}


handleForm():void{
 const userData = this.signupForm.value;
 this.isLoading = true; 

 if(this.signupForm.valid == true){
  this._AuthService.signup(userData).subscribe({
    next:(res)=> {
      if(res.message == 'success'){
         this.isLoading = false;
          this._Router.navigate(['/login'])
      }
    },
    error:(err)=>{
      this.isLoading = false;
      console.log(err)
      this.errormsg = err.error.message;
    }
  })
  }
 }


}
