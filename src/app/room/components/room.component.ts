import { Subscription } from 'rxjs/Subscription';
import { IRoom } from '../../interface/IRoom';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'gw-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})

export class RoomComponent implements OnInit {
  id: string;
  room: IRoom;
  roomSubs: Subscription

  constructor(private route: ActivatedRoute,
              private roomService: RoomService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(route => {
      this.changeRoom(route.get('id'));
    });
  }

  private changeRoom(id: string) {
  this.roomSubs = this.roomService.getRoomById(id)
     .subscribe(room => {
      this.room = room;
    });
  }
}