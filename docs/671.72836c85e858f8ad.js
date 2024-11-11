"use strict";(self.webpackChunkdessertWeb=self.webpackChunkdessertWeb||[]).push([[671],{6671:(M,d,p)=>{p.r(d),p.d(d,{SignupComponent:()=>$});var _=p(177),i=p(4341),e=p(540),f=p(6516),c=p(303);function h(n,l){1&n&&(e.j41(0,"p"),e.EFF(1,"Name is Required"),e.k0s())}function F(n,l){1&n&&(e.j41(0,"p"),e.EFF(1,"Name must be at least 3 chars"),e.k0s())}function E(n,l){1&n&&(e.j41(0,"p"),e.EFF(1,"Name max length is 20 chars"),e.k0s())}function b(n,l){if(1&n&&(e.j41(0,"div",17),e.DNE(1,h,2,0,"p",18),e.DNE(2,F,2,0,"p",18),e.DNE(3,E,2,0,"p",18),e.k0s()),2&n){const o=e.XpG();let t,r,s;e.R7$(1),e.Y8G("ngIf",null==(t=o.signupForm.get("name"))?null:t.getError("required")),e.R7$(1),e.Y8G("ngIf",null==(r=o.signupForm.get("name"))?null:r.getError("minlength")),e.R7$(1),e.Y8G("ngIf",null==(s=o.signupForm.get("name"))?null:s.getError("maxlength"))}}function v(n,l){1&n&&(e.j41(0,"p"),e.EFF(1,"Email is Required"),e.k0s())}function k(n,l){1&n&&(e.j41(0,"p"),e.EFF(1,"Email Invalid"),e.k0s())}function x(n,l){if(1&n&&(e.j41(0,"div",17),e.DNE(1,v,2,0,"p",18),e.DNE(2,k,2,0,"p",18),e.k0s()),2&n){const o=e.XpG();let t,r;e.R7$(1),e.Y8G("ngIf",null==(t=o.signupForm.get("email"))?null:t.getError("required")),e.R7$(1),e.Y8G("ngIf",null==(r=o.signupForm.get("email"))?null:r.getError("email"))}}function w(n,l){1&n&&(e.j41(0,"p"),e.EFF(1,"Password is Required"),e.k0s())}function C(n,l){1&n&&(e.j41(0,"p"),e.EFF(1,"Password must start with upperCase then from 6 to 10"),e.k0s())}function P(n,l){if(1&n&&(e.j41(0,"div",17),e.DNE(1,w,2,0,"p",18),e.DNE(2,C,2,0,"p",18),e.k0s()),2&n){const o=e.XpG();let t,r;e.R7$(1),e.Y8G("ngIf",null==(t=o.signupForm.get("password"))?null:t.getError("required")),e.R7$(1),e.Y8G("ngIf",null==(r=o.signupForm.get("password"))?null:r.getError("pattern"))}}function R(n,l){1&n&&(e.j41(0,"p"),e.EFF(1,"rePassword is Required"),e.k0s())}function D(n,l){1&n&&(e.j41(0,"p"),e.EFF(1,"rePassword must be at least 6 chars"),e.k0s())}function N(n,l){1&n&&(e.j41(0,"p"),e.EFF(1,"rePassword is MissMatch"),e.k0s())}function S(n,l){if(1&n&&(e.j41(0,"div",17),e.DNE(1,R,2,0,"p",18),e.DNE(2,D,2,0,"p",18),e.DNE(3,N,2,0,"p",18),e.k0s()),2&n){const o=e.XpG();let t,r,s;e.R7$(1),e.Y8G("ngIf",null==(t=o.signupForm.get("rePassword"))?null:t.getError("required")),e.R7$(1),e.Y8G("ngIf",null==(r=o.signupForm.get("rePassword"))?null:r.getError("minlength")),e.R7$(1),e.Y8G("ngIf",null==(s=o.signupForm.get("rePassword"))?null:s.getError("misMatch"))}}function G(n,l){1&n&&(e.j41(0,"p"),e.EFF(1,"Phone is Required"),e.k0s())}function I(n,l){1&n&&(e.j41(0,"p"),e.EFF(1,"Accept only egypt phone numbers"),e.k0s())}function T(n,l){if(1&n&&(e.j41(0,"div",17),e.DNE(1,G,2,0,"p",18),e.DNE(2,I,2,0,"p",18),e.k0s()),2&n){const o=e.XpG();let t,r;e.R7$(1),e.Y8G("ngIf",null==(t=o.signupForm.get("phone"))?null:t.getError("required")),e.R7$(1),e.Y8G("ngIf",null==(r=o.signupForm.get("phone"))?null:r.getError("pattern"))}}function j(n,l){1&n&&e.nrm(0,"i",19)}function Y(n,l){if(1&n&&(e.j41(0,"div",17)(1,"h5"),e.EFF(2),e.k0s()()),2&n){const o=e.XpG();e.R7$(2),e.JRh(o.errormsg)}}let $=(()=>{class n{constructor(o,t,r){this._FormBuilder=o,this._AuthService=t,this._Router=r,this.errormsg="",this.isLoading=!1,this.signupForm=this._FormBuilder.group({name:["",[i.k0.required,i.k0.minLength(3),i.k0.maxLength(20)]],email:["",[i.k0.email,i.k0.required]],password:["",[i.k0.required,i.k0.minLength(6),i.k0.pattern(/^\w{6,10}$/)]],rePassword:[""],phone:["",[i.k0.required,i.k0.pattern(/^01[0125][0-9]{8}$/)]]},{validators:[this.confirmPassword]})}confirmPassword(o){let t=o.get("password"),r=o.get("rePassword");null==r?.value?r?.setErrors({required:!0}):t?.value!=r?.value&&r?.setErrors({misMatch:!0})}handleForm(){const o=this.signupForm.value;this.isLoading=!0,1==this.signupForm.valid&&this._AuthService.signup(o).subscribe({next:t=>{"success"==t.message&&(this.isLoading=!1,this._Router.navigate(["/login"]))},error:t=>{this.isLoading=!1,console.log(t),this.errormsg=t.error.message}})}static{this.\u0275fac=function(t){return new(t||n)(e.rXU(i.ok),e.rXU(f.u),e.rXU(c.Ix))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-signup"]],standalone:!0,features:[e.aNF],decls:37,vars:9,consts:[[1,"allForm"],[1,"animate-charcter"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","name",1,"form-label"],["formControlName","name","type","text","id","name","placeholder","Enter Your Name...",1,"form-control"],["class","alert alert-danger p-1 small w-100 mx-auto",4,"ngIf"],["for","email",1,"form-label"],["formControlName","email","type","email","id","email","placeholder","Enter Your Email...",1,"form-control"],["for","password",1,"form-label"],["formControlName","password","type","password","id","password","placeholder","Enter Your Password...",1,"form-control"],["for","rePassword",1,"form-label"],["formControlName","rePassword","type","password","id","rePassword","placeholder","Enter Your rePassword...",1,"form-control"],["for","phone",1,"form-label"],["formControlName","phone","type","tel","id","phone","placeholder","Enter Your phone...",1,"form-control"],["type","submit",1,"btn",3,"disabled"],["class","fa fa-spin fa-spinner",4,"ngIf"],[1,"alert","alert-danger","p-1","small","w-100","mx-auto"],[4,"ngIf"],[1,"fa","fa-spin","fa-spinner"]],template:function(t,r){if(1&t&&(e.j41(0,"section")(1,"div",0)(2,"h3",1),e.EFF(3,"SignUp Now:"),e.k0s(),e.j41(4,"form",2),e.bIt("ngSubmit",function(){return r.handleForm()}),e.j41(5,"div",3)(6,"label",4),e.EFF(7,"Name:"),e.k0s(),e.nrm(8,"input",5),e.k0s(),e.DNE(9,b,4,3,"div",6),e.j41(10,"div",3)(11,"label",7),e.EFF(12,"Email:"),e.k0s(),e.nrm(13,"input",8),e.k0s(),e.DNE(14,x,3,2,"div",6),e.j41(15,"div",3)(16,"label",9),e.EFF(17,"Password:"),e.k0s(),e.nrm(18,"input",10),e.k0s(),e.DNE(19,P,3,2,"div",6),e.j41(20,"div",3)(21,"label",11),e.EFF(22,"rePassword:"),e.k0s(),e.nrm(23,"input",12),e.k0s(),e.DNE(24,S,4,3,"div",6),e.j41(25,"div",3)(26,"label",13),e.EFF(27,"Phone:"),e.k0s(),e.nrm(28,"input",14),e.k0s(),e.DNE(29,T,3,2,"div",6),e.j41(30,"button",15),e.EFF(31,"SingUp "),e.DNE(32,j,1,0,"i",16),e.k0s()(),e.DNE(33,Y,3,1,"div",6),e.k0s()(),e.nrm(34,"br")(35,"br")(36,"br")),2&t){let s,a,u,m,g;e.R7$(4),e.Y8G("formGroup",r.signupForm),e.R7$(5),e.Y8G("ngIf",(null==(s=r.signupForm.get("name"))?null:s.errors)&&((null==(s=r.signupForm.get("name"))?null:s.touched)||(null==(s=r.signupForm.get("name"))?null:s.value.length)>0)),e.R7$(5),e.Y8G("ngIf",(null==(a=r.signupForm.get("email"))?null:a.errors)&&((null==(a=r.signupForm.get("email"))?null:a.touched)||(null==(a=r.signupForm.get("email"))?null:a.value.length)>0)),e.R7$(5),e.Y8G("ngIf",(null==(u=r.signupForm.get("password"))?null:u.errors)&&((null==(u=r.signupForm.get("password"))?null:u.touched)||(null==(u=r.signupForm.get("password"))?null:u.value.length)>0)),e.R7$(5),e.Y8G("ngIf",(null==(m=r.signupForm.get("rePassword"))?null:m.errors)&&((null==(m=r.signupForm.get("rePassword"))?null:m.touched)||(null==(m=r.signupForm.get("rePassword"))?null:m.value.length)>0)),e.R7$(5),e.Y8G("ngIf",(null==(g=r.signupForm.get("phone"))?null:g.errors)&&((null==(g=r.signupForm.get("phone"))?null:g.touched)||(null==(g=r.signupForm.get("phone"))?null:g.value.length)>0)),e.R7$(1),e.Y8G("disabled",r.signupForm.invalid),e.R7$(2),e.Y8G("ngIf",r.isLoading),e.R7$(1),e.Y8G("ngIf",r.errormsg)}},dependencies:[_.MD,_.bT,i.X1,i.qT,i.me,i.BC,i.cb,i.j4,i.JD],styles:[".allForm[_ngcontent-%COMP%]{border:1px solid black;margin-left:150px;padding:5px 10px;border-radius:10px;max-width:900px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.animate-charcter[_ngcontent-%COMP%]{text-transform:uppercase;background-image:linear-gradient(-225deg,#231557 0%,#44107a 29%,#ff1361 67%,#fff800 100%);background-size:auto auto;background-clip:border-box;background-size:200% auto;color:#fff;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:_ngcontent-%COMP%_textclip 2s linear infinite;display:inline-block;font-size:50px;margin-left:250px;margin-bottom:50px;margin-top:30px}@keyframes _ngcontent-%COMP%_textclip{to{background-position:200% center}}.btn[_ngcontent-%COMP%]{background-color:#a070a1;border:1px solid #a070a1;border:none;margin-left:380px;margin-top:10px;margin-bottom:10px;padding:10px 15px;width:150px}.btn[_ngcontent-%COMP%]:hover{background-color:#e6b2c6;border:1px solid #e6b2c6;color:#44107a;border:none;margin-left:380px;margin-top:10px;margin-bottom:10px;padding:10px 15px;width:150px}.form-label[_ngcontent-%COMP%]{color:#ad2959;font-weight:700;font-family:Cambria,Cochin,Georgia,Times,Times New Roman,serif}"]})}}return n})()}}]);