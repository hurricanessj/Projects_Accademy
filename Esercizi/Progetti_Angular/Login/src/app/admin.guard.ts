import { inject, Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {

  let auth = inject(AuthService);
  let router = inject(Router);


console.log(auth.getRole);
console.log(auth.getRole());

  if(auth.getRole() == 'admin'){
    return true;
  }

  router.navigate(['/user']);
  return false;
};
