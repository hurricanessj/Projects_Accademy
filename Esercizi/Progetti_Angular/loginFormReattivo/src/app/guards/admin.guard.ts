import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  let auth = inject(AuthService);
  let router = inject(Router);


  console.log(auth.getRole);
  console.log(auth.getRole());

  if (auth.getRole() == 'admin') {
    return true;
  }

  router.navigate(['/user']);
  return false;
};
