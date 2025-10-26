import { inject } from '@angular/core';
import { CanActivateFn, createUrlTreeFromSnapshot, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  let auth = inject(AuthService);
  let router = inject(Router);


  if(auth.getIsLoggedIn()){
    return true
  }
  return router.createUrlTree(['/login'],{
    queryParams: {returnUrl: state.url}
  })


};
