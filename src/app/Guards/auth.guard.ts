import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  if(localStorage.getItem('eToken') != null){
    return true;
  }else{
     return false;
     _router.navigate(['/login']);
  }
};
