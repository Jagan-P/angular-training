import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class HttpServiceService {
  count=0;
  constructor(
    private httpClient: HttpClient
  ) { }

  get(url):Observable<any> {
    return this.httpClient.get(url);
  }

  incrementCount() {
    ++this.count;
  }

  returnCount() {
    return this.count;
  }

}


export class CanActivateTemplateDrivenForms implements CanActivate  {
  constructor(
    // private router: Router
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    // return this.permissions.canActivate(this.currentUser, route.params.id);
    console.log(route, state);
    if(window.localStorage.getItem("userType")=="admin") {
      return true;
      // this.router.navigateByUrl("/http-client");
    }
    return false;
  }
}
