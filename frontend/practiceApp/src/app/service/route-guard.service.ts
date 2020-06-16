import { Injectable } from '@angular/core';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private hardcodedAuthenticationService:HardcodedAuthenticationService,private router : Router) { }


  canActivate( route: ActivatedRouteSnapshot,state: RouterStateSnapshot){

    if(this.hardcodedAuthenticationService.isUserLoggedin()) return true

    else{
      this.router.navigate(['login'])
     return false
    }

    
  }
  
  
  }
