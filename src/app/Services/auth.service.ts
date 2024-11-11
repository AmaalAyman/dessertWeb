import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:any;
  userEmail:any;
  userPassword:any;


 myToken:any= {
  token:localStorage.getItem('eToken')
}

  constructor(private _HttpClient:HttpClient) { }

  saveUserData(){
    if(localStorage.getItem('eToken') != null){
      let encodeToken:any = localStorage.getItem('eToken');
      let decodeToken = jwtDecode(encodeToken);
      this.userData = decodeToken;
    }
  }



  signup(userData:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', userData);
 }

  login(userData:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', userData);
 }

 changePassword(newPass:object):Observable<any>{
  return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/users/updateMe/', newPass , {
    headers:this.myToken
  })
 }
 
 addAddress(data:object):Observable<any>{
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/addresses', data , {
    headers:this.myToken
  })
 }

 deleteAddress(id:string):Observable<any>{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/addresses/${id}` , {
    headers:this.myToken
  })
 }

 getAddress():Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/addresses` , {
    headers:this.myToken
  })
 }

 forgetPassword(newEmail:any):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords` , newEmail )
 }

 resetPassword(code:any):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode` , code )
 }

 newPassword(data:any):Observable<any>{
  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword` , data )
 }
 
}

