import { CanActivateFn } from '@angular/router';
import { STORAGE_KEY } from './app.constants';

export const AuthGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem(STORAGE_KEY);
  if (token) {
    return true;
  } else {
    return false;
  }
};
