import { IRoom } from './../../../interface/IRoom';
import { RoomService } from './../../../service/room.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gw-new-room-form',
  templateUrl: './new-room-form.component.html',
  styleUrls: ['./new-room-form.component.scss']
})
export class NewRoomFormComponent implements OnInit {
  room: IRoom;
  id: string;
  roomName: string;
  pictureUrl: string;


  constructor(private roomService: RoomService) { 
  }

  ngOnInit() {
  }

  submitNewRoom(name, picture) {
    const id = this.room.name.toLocaleLowerCase();
     const newRoom = new IRoom (id, name, picture, []);
    this.roomService.createRoom(newRoom);
  }
}
