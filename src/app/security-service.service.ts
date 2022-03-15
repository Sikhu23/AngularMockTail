import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityServiceService implements CanActivate {


  canActivate(){
    if(localStorage.token){
      return true;
    }
    else{
      this.router.navigate([""])
      return false;
    }

  }
  constructor(private router:Router) { }

}
