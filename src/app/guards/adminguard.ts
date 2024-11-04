import { CanActivateFn } from '@angular/router';

export function AdminGuard(): CanActivateFn {
  let role = 'user';
  return () => {
    if (role == 'admin') return true;
    alert('Sorry no access for role ' + role);
    return false;
  };
}
