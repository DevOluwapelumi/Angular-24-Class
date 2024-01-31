import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const studentGuard: CanActivateFn = (route, state) => {
  let routes = Inject(Router)
  let user=JSON.parse(localStorage.getItem('current_user')!)
  if (user){
    routes.navigate(['/in'])
  }
  return true;
};
