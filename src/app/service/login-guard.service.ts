import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.user$.pipe(
      map(loggedInUser => {
        if (loggedInUser) return true;

        this.router.navigate(["welcome"], {
          fragment: "login-needed" // updates the url with the string value provided.
        });
        return false;
      })
    )
    }
}
