import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
 const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.checkLoginStatus() && auth.hasRole('admin')) {
    return true;
  }

  return router.createUrlTree(['/unauthorized']);
};
