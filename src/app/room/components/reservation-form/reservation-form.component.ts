import { Reservation } from '../../../interface/Reservation';
import { RoomService } from '../../../service/room.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gw-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {
  roomId: string;
  reservationType: string[];
  startTime: string;
  endTime: string;
  selectedDate;

  constructor(private roomService: RoomService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.reservationType = [
      "Code Review",
      "Meeting",
      "Interview",
      "No-Instructor"
    ];
    // gets the params and uses changeRoomID to assign it to local property roomID
    this.route.paramMap.subscribe(params => {
      this.assignRoomId(params.get('id'));
    })
    this.testId();
  }

  testId() {
    console.log(this.roomService.getRoomById(this.roomId).subscribe(roomId => console.log(roomId)));
  }

  save(res: Reservation) {
    return this.roomService.saveReservation(this.roomId, res)
    // navigates to the sibling route.. https://stackoverflow.com/questions/39124906/navigate-relative-with-angular-2-router-version-3
    // navigates to lists route, so user can see updated list.
      .then(() => this.router.navigate(["../reservations"], { relativeTo: this.route })); 
  }

  // helper func for storing params/:id  to roomId
  private assignRoomId(id: string) {
    this.roomId = id;
  }


}
