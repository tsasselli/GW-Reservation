import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IRoom } from '../../../interface/IRoom';
import { RoomService } from '../../../service/room.service';

@Component({
  selector: 'gw-room-reservations',
  templateUrl: './room-reservations.component.html',
  styleUrls: ['./room-reservations.component.scss']
})
export class RoomReservationsComponent implements OnInit {
  room: IRoom;
  private roomId: string;


  constructor(private route: ActivatedRoute,
              private roomService: RoomService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      this.assignRoom(params.get('id'));
    })
    this.testId();
   }

  testId() {
    console.log(this.roomService.getRoomById(this.roomId).subscribe(roomId => console.log(roomId)));
  }

   private assignRoom(id) {
     if (!id) return;
     
     this.roomId = id;
     this.roomService.getRoomById(id).map(room => {
       if (!room.reservations) return;

       room.reservations.forEach((reservation) => {
         console.log(reservation);
       });
       return room;
     })
       .subscribe(room => {this.room = room});
   };
}
