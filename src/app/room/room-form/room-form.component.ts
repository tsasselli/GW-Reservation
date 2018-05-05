import { Reservation } from './../../interface/Reservation';
import { RoomService } from './../../service/room.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gw-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss']
})
export class RoomFormComponent implements OnInit {
  roomId: string;
  reserveFor: string[];
  startTime: string;
  endTime: string;

  constructor(private roomService: RoomService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.reserveFor = [
      "Code Review",
      "Meeting",
      "Interview",
      "No-Instructor"
    ];
    // gets the params and uses changeRoomID to assign it to local property roomID
    this.route.paramMap.subscribe(params => {
      this.changeRoomId(params.get('id'));
    })
  }
  // helper func for storing params/:id  to roomId
  private changeRoomId(id: string) {
    this.roomId = id;
  }

  save(res: Reservation) {
    return this.roomService.saveReservationToDb(this.roomId, res)
    // navigates to the sibling route.. https://stackoverflow.com/questions/39124906/navigate-relative-with-angular-2-router-version-3
      .then(() => this.router.navigate(["../list"], { relativeTo: this.route }));
  }

}
