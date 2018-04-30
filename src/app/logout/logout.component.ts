import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gw-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent  {

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

}
