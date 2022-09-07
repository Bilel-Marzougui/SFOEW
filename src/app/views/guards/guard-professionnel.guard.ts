import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardProfessionnelGuard implements CanActivate {
  constructor(private proService:LoginService ,private router:Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  return new Promise((resolve,reject)=>{
    if (this.proService.LoggedInPro()==true){
      resolve(true)
    }
    else{
      this.router.navigate(['/contact'])
      resolve(false)
    }
  })
  }

}
