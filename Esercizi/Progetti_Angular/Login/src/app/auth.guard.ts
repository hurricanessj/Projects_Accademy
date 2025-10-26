import { inject, Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export class AuthGuard CanActivateFn = (route, state) => {



  let auth = inject(AuthService);
  let router = inject(Router);


  if(auth.getIsLoggedIn()){
    return true
  }
  return router.createUrlTree(['/login'],{
    queryParams: {returnUrl: state.url}
  })

  
};
