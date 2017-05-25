import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // if(next.queryParams['apikey'] === '123'){
    //   return true;
    // }else{
    //   this.router.navigateByUrl('/login');
    //   return false;
    // }

    let account = localStorage.getItem('account');
    let pw = localStorage.getItem('pw');
    if (account !== null && pw !== null) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
