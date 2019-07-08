import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router, private loginService: LoginService) {}

  canActivate (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    //verify if the user is logged in or not

    //this.router.navigate(['/login']);

    if(this.loginService.isLogged())
      return true;
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
