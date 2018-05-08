import { ActivatedRoute } from '@angular/router';
import { IRoom } from './../../interface/IRoom';
import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'gw-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  room: IRoom;
  

  constructor(private route: ActivatedRoute,
              private roomService: RoomService) { }

  ngOnInit() {
  }



}
