import { AppUser } from './../../interface/app-user';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'gw-nav-auth',
  templateUrl: './nav-auth.component.html',
  styleUrls: ['./nav-auth.component.scss']
})

export class NavAuthComponent implements OnInit, OnDestroy {
  user: AppUser;
  sub: Subscription;

  constructor(private auth: AuthService) { }

   ngOnInit() {
     this.sub = this.auth.appUser$.subscribe(appUser => this.user = appUser);
  }

  logout() {
    this.auth.logout();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
