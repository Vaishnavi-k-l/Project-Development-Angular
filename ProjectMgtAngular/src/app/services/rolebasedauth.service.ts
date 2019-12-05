import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RolebasedauthService implements CanActivate{



  constructor(public auth: AuthenticationService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;

    var role=sessionStorage.getItem('usertype');
    console.log(role);
    console.log(expectedRole)
    if (!this.auth.isUserLoggedIn || role != expectedRole) {
      this.router.navigate(['login']);
      console.log(this.auth.isUserLoggedIn);
      console.log(role != expectedRole)
      console.log("lalalallala");
      
      return false;
    }
    return true;
  }

}