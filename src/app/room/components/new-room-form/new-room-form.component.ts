import { Reservation } from './../../../interface/Reservation';
import { IRoom } from './../../../interface/IRoom';
import { RoomService } from './../../../service/room.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Form, NgForm } from '@angular/forms';

@Component({
  selector: 'gw-new-room-form',
  templateUrl: './new-room-form.component.html',
  styleUrls: ['./new-room-form.component.scss']
})
export class NewRoomFormComponent implements OnInit {
  room: IRoom;
  roomName: string;
  pictureUrl: string;


  constructor(private roomService: RoomService) { 
  }

  ngOnInit() {
  }

  submitNewRoom(room) {
    const id: string = room.name.toLowerCase();
    console.log(id);
    const newRoom = new IRoom(id, room.name, room.pictureUrl, [])
    this.roomService.createRoom().set(id, newRoom);
  }
}
