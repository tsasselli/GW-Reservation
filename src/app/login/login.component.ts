import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: AuthService) {
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

  loginWithGithub() {
    this.auth.loginWithGithub();
  }

  logOut() {
    this.auth.logout();
  }
}
