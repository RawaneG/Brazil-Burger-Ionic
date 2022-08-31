import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad
{
  constructor(private service: SecurityService, private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
      let url = state.url;
      return this.authUser(route, url);
    }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
    return this.canActivate(childRoute, state);
    }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  authUser(route : ActivatedRouteSnapshot, url : any) : boolean
  {
    if(this.service.identifier())
    {
      const userRole = this.service.getRole()[0];

      if(url === '/livraison')
      {
        if(userRole === 'ROLE_LIVREUR')
        {
          return true;
        }
        else
        {
          this.router.navigate(['/contenu']);
          return false;
        }
      }
      else
      {
        if(userRole === 'ROLE_LIVREUR')
        {
          this.router.navigate(['/livraison']);
          return false;
        }
        else
        {
          return true;
        }
      }
    }
    else
    {
      if(url === '/catalogue')
      {
        return true;
      }
      else
      {
        this.router.navigate(['/contenu']);
        return false;
      }
    }
  }
}
