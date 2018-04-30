import { AppUser } from './../interface/app-user';
import { AuthService } from '../service/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'gw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input('user') user: AppUser;

  constructor(private auth: AuthService,) {
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

  loginWithGithub() {
    this.auth.loginWithGithub();
  }

  logOut() {
    this.auth.logout();
    console.log("logged out");
  }
}
