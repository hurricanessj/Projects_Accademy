import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  let authService = inject(AuthService);
  let router = inject(Router)

  if (authService.checkLoginStatus()) {
    return true
  } else {

    return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } })
    
  }
};
