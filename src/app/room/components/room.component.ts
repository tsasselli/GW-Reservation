import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Room } from '../../interface/Room';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'gw-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})

export class RoomComponent implements OnInit {
  id: string;
  state: string;
  room: Room;
  roomSubs: Subscription;

  constructor(private route: ActivatedRoute,
              private roomService: RoomService) { }

  ngOnInit() {
    //this.room = this.route.snapshot.data['resvList'];
    this.route.paramMap
    .subscribe(route => {
      this.changeRoom(route.get('id'));
    });
  }

  private changeRoom(id: string) {
    if (!id) return;
    this.roomService.getRoomById(id)
     .subscribe(room => {
      this.room = room;
    });
  }
}
