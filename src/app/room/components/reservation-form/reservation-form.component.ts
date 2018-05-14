import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Reservation } from '../../../interface/Reservation';
import { RoomService } from '../../../service/room.service';
import { AppUser } from './../../../interface/app-user';
import { AuthService } from './../../../service/auth.service';

@Component({
  selector: 'gw-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss'],
})
export class ReservationFormComponent implements OnInit {
  roomId: string;
  roomID: string;
  reservation: Reservation;
  reservationType: string[];
  selectedDate;
  user: AppUser;
  //date: Date;
  public date = [new Date(2018, 1, 12, 10, 30), new Date(2018, 3, 21, 20, 30)];

  constructor(private roomService: RoomService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.reservationType = [
      "Code Review",
      "Meeting",
      "Interview",
      "No-Instructor"
    ];
    // gets the params and uses changeRoomID to assign it to local property roomID
    this.route.parent.paramMap.subscribe(params => {
      this.assignRoomId(params.get('id'));
    })

    this.authService.appUser$.subscribe(user => {
      this.user = user });

    //this.testId();
  }

  save(res: Reservation) {
    return this.roomService.saveReservation(this.roomId, res)
    // navigates to the sibling route.. https://stackoverflow.com/questions/39124906/navigate-relative-with-angular-2-router-version-3
    // navigates to lists route, so user can see updated list.
      .then(() => this.router.navigate(["../reservations"], { relativeTo: this.route })); 
  }

  private testId() {
    console.log(this.roomService.getRoomById(this.roomId).subscribe(roomId => console.log(roomId)));
  }

  // helper func for storing params/:id  to roomId
  private assignRoomId(id: string) {
    this.roomId = id;
    this.roomID = this.roomId ? this.roomId.charAt(0).toUpperCase() + this.roomId.substr(1).toLowerCase() : "";
  }

}
