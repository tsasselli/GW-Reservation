import { AppUser } from './../../interface/app-user';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gw-nav-auth',
  templateUrl: './nav-auth.component.html',
  styleUrls: ['./nav-auth.component.scss']
})

export class NavAuthComponent implements OnInit {
  user: AppUser;

  constructor(private auth: AuthService) { }

   ngOnInit() {
     this.auth.appUser$.subscribe(appUser => this.user = appUser);
  }

}
