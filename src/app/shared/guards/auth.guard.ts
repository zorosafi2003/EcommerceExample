import { AuthService } from './../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth:AngularFireAuth ,private _AuthService: AuthService , private _Router:Router){

  }
  canActivate():  boolean {
    return true;
  /*   if(this._AuthService.getCurrentUser() != null)
    {
      return true;
    }
    else
    {
      this._Router.navigateByUrl("/login");
      return false;
    } */
  }
}
