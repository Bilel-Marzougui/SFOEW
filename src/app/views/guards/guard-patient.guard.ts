import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { AuthPatientService } from '../services/patient/auth-patient.service';

@Injectable({
  providedIn: 'root'
})
export class GuardPatientGuard implements CanActivate {
  constructor(private patientService:AuthPatientService ,private router:Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve,reject)=>{
        if(this.patientService.LoggedInPat()==true){
        resolve(true)
      }
      else{

        resolve(false)
        this.router.navigate(['/contact'])

      }
      })

  }

}
