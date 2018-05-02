import { INavigationItem } from './../../interface/INavigationItem';
import { Component, OnInit } from '@angular/core';
import { UrlResolver } from '@angular/compiler';

@Component({
  selector: 'gw-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  public navArr: INavigationItem[];
  
  constructor() { }

  ngOnInit() {
    this.navArr = [
      {
        title: "Welcome",
        url: "/welcome",
      },
      {
      title: "about",
      url: "/about",
    }]
  }
}
