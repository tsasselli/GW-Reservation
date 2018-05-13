import { IRoom } from './../../interface/IRoom';
import { RoomService } from './../../service/room.service';
import { INavigationItem } from './../../interface/INavigationItem';
import { Component, OnInit } from '@angular/core';
import { UrlResolver } from '@angular/compiler';
import { Subscription, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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
   this.initalizeRoom();
  }

  private initalizeRoom() {
    this.roomService.rooms$.pipe(
      // add welcome to front of array. 
      tap(rooms => {
        this.navArr = [];
        this.navArr.unshift({
          title: "Welcome",
          url: "/welcome"
        });
        console.log(rooms, "do")
        return rooms;
      }),
      // add the rooms name and id properties
      map(rooms => {
        return rooms.map(room => {
          const navItem: INavigationItem = {
            title: room.name,
            url: "rooms/" + room.id
          };
          return navItem;
        });
      }))
      .subscribe(rooms => {
        this.navArr = this.navArr.concat(rooms);
      })
  }
}
