import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { authGuard } from './auth.guard';

export const adminGuard: CanActivateFn = (route, state) => {
  let auth = inject(authGuard);
  let router = inject(Router);


  if (auth.getRole() == 'admin') {
    return true;
  }

  router.navigate(['/user']);
  return false;
};
