import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from './services/api.service';

export const authGuard: CanActivateFn = (route, state) => {
  const apiService = inject(ApiService);
  const router = inject(Router);
  if (apiService.success) {
    return true;
  } else {
    alert('Register to go to profile');
    router.navigate(['']);
    return false;
  }
};
