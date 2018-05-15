import { Reservation } from './../../../interface/Reservation';
import { Room } from '../../../interface/Room';
import { RoomService } from './../../../service/room.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Form, NgForm } from '@angular/forms';

@Component({
  selector: 'gw-new-room-form',
  templateUrl: './new-room-form.component.html',
  styleUrls: ['./new-room-form.component.scss']
})
export class NewRoomFormComponent implements OnInit {
  room: Room;
  roomName: string;
  pictureUrl: string;


  constructor(private roomService: RoomService) { 
  }

  ngOnInit() {
  }

  submitNewRoom(room) {
    const id: string = room.name.replace(/\s/g, "").toLowerCase() ;
    console.log(id);
    const newRoom = new Room(id, room.name, room.pictureUrl, [])
    this.roomService.createRoom().set(id, newRoom);
  }
}
