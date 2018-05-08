import { map } from 'rxjs/operators';
import { IRoom } from './../../interface/IRoom';
import { RoomService } from './../../service/room.service';
import { INavigationItem } from './../../interface/INavigationItem';
import { Component, OnInit } from '@angular/core';
import { UrlResolver } from '@angular/compiler';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/do';

@Component({
  selector: 'gw-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  navArr: INavigationItem[];
  rooms: IRoom[];
  sub: Subscription;
  
  constructor(private roomService: RoomService) { }

  ngOnInit() {
     this.roomService.rooms$
     // add welcome to front of array. 
      .do( rooms => {
        this.navArr = [];
        this.navArr.unshift({
          title: "Welcome",
          url: "/welcome"
        });
        console.log(rooms, "do")
        return rooms;
      })
    .map(rooms => {
      return rooms.map(room => {
        const navItem: INavigationItem = {
          title: room.title,
          url: "/rooms/" + room.id
        };
        console.log(navItem, "navItem map",);
        return navItem;
      });
    })
    .subscribe(rooms => {
      this.navArr = this.navArr.concat(rooms);
      console.log(this.navArr);
    })
  }
}
