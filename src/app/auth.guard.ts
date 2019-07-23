import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthenticationService} from "./authentication.service";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private authServ: AuthenticationService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    if(!this.authServ.isConnected){
      return this.authServ.getRoles().pipe(
          map(roles=>{
            if(roles.includes("ROLE_USER")){
              this.authServ.isConnected = true;
              return true;
            }
            this.authServ.isConnected = false;
            return false;
          }),
          catchError((err:any)=>{
            this.router.navigate(['/login']);
            return of(false);
          })
      )
    }
    return of(true);

  }
  
}
