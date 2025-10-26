import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const aziendaGuard: CanActivateFn = (route, state) => {
  let auth = inject(AuthService);
  let router = inject(Router);


  console.log(auth.getRole);
  console.log(auth.getRole());

  if (auth.getRole() == 'AZIENDA') {
    return true;
  }

  router.navigate(['/utenti']);
  return false;
};
