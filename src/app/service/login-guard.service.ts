import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.user$.pipe(
      map(loggedInUser => Boolean(loggedInUser || loggedInUser.email))
    );
  }
  constructor(private authService: AuthService) { }
}
