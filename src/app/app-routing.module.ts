import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Guards/auth.guard';


const routes: Routes = [
  {path:'', loadComponent:()=>import('src/app/Layouts/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent), children:[

   {path:'login', loadComponent:()=>import('src/app/Components/login/login.component').then((m)=>m.LoginComponent), title:'Login'},
   {path:'signup', loadComponent:()=>import('src/app/Components/signup/signup.component').then((m)=>m.SignupComponent), title:'SignUp'}
  ]},

  {path:'',canActivate:[authGuard] ,loadComponent:()=>import('src/app/Layouts/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent), children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', loadComponent:()=>import('src/app/Components/home/home.component').then((m)=>m.HomeComponent), title:'Home'},
    {path:'pies', loadComponent:()=>import('src/app/Components/pies/pies.component').then((m)=>m.PiesComponent), title:'Pies'},
    {path:'cakes', loadComponent:()=>import('src/app/Components/cakes/cakes.component').then((m)=>m.CakesComponent), title:'Cakes'},
    {path:'icecream', loadComponent:()=>import('src/app/Components/icecream/icecream.component').then((m)=>m.IcecreamComponent), title:'IceCream'},
    {path:'dounts', loadComponent:()=>import('src/app/Components/dounts/dounts.component').then((m)=>m.DountsComponent), title:'Dounts'},
    {path:'chocolates', loadComponent:()=>import('src/app/Components/chocolates/chocolates.component').then((m)=>m.ChocolatesComponent), title:'Chocolates'},
    {path:'profile', loadComponent:()=>import('src/app/Components/profile/profile.component').then((m)=>m.ProfileComponent), title:'Profile'},
    {path:'cart', loadComponent:()=>import('src/app/Components/cart/cart.component').then((m)=>m.CartComponent), title:'Cart'},
    {path:'wishlist', loadComponent:()=>import('src/app/Components/wish-list/wish-list.component').then((m)=>m.WishListComponent), title:'WishList'},
  ]},

  {path:'**', loadComponent:()=>import('src/app/Components/not-found/not-found.component').then((m)=>m.NotFoundComponent), title:'Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
