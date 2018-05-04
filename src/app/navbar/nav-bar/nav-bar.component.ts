import { IRoom } from './../../interface/IRoom';
import { RoomService } from './../../service/room.service';
import { INavigationItem } from './../../interface/INavigationItem';
import { Component, OnInit } from '@angular/core';
import { UrlResolver } from '@angular/compiler';

@Component({
  selector: 'gw-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  navArr: INavigationItem[];
  rooms: IRoom[];
  
  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.navArr = this.roomService.rooms.map(room => {
      return {
      title: room.title,
      url: "room/" + room.id
      }
    })
  }
}
