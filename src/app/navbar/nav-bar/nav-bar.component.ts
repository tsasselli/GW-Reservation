import { Component, OnInit } from '@angular/core';
import { UrlResolver } from '@angular/compiler';

@Component({
  selector: 'gw-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  // public menuItems: INavigationItem[] = [{
  //   label: "test",
  //   url: "/"
  // }];

  constructor() { }

  ngOnInit() {
  }

}
