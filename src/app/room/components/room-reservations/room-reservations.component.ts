import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { IRoom } from '../../../interface/IRoom';
import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../../service/room.service';

@Component({
  selector: 'gw-room-reservations',
  templateUrl: './room-reservations.component.html',
  styleUrls: ['./room-reservations.component.scss']
})
export class RoomReservationsComponent implements OnInit {
  room: IRoom;
  roomId: string;


  constructor(private route: ActivatedRoute,
              private roomService: RoomService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.assignRoom(params.get('id'));
    })

    this.testId();
   }

  testId() {
    console.log(this.roomService.getRoomById(this.roomId).subscribe(roomId => console.log(roomId)));
  }


   private assignRoom(id) {
     this.roomId = id;
     this.roomService.getRoomById(id).subscribe(room => {this.room = room});
   };
}
