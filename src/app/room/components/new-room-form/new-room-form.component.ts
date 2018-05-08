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
  name: string;
  pictureUrl: string;


  constructor(private roomService: RoomService) { 
    this.id = this.name.toLocaleLowerCase();
  }

  ngOnInit() {
  }

  submitNewRoom(room: IRoom) {
    let newRoom = new IRoom (this.id, this.name,this.pictureUrl, []);
    this.roomService.createRoom(newRoom);
  }
 
}
