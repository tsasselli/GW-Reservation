import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Reservation } from '../../../interface/Reservation';
import { ReasonService } from '../../../service/reason.service';
import { RoomService } from '../../../service/room.service';
import { AppUser } from './../../../interface/app-user';
import { AuthService } from './../../../service/auth.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

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
  pickerInput: { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  selectedDate;
  user: AppUser;
  reason$;
  showNewReasonForm: boolean = false;

  constructor(private roomService: RoomService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private reasonService: ReasonService) { }

  ngOnInit() {
    // gets the params and uses changeRoomID to assign it to local property roomID
    this.route.parent.paramMap.subscribe(params => {
      this.assignRoomId(params.get('id'));
    })

   this.authService.appUser$.subscribe(user => {
      this.user = user
    });
    this.reason$ = this.reasonService.reason$;
    //this.testId();
  }

  save(resvForm) {
    const reason: string = resvForm.reason;
    const emailConf: string = resvForm.emailConfirmation;
    const email: string = resvForm.email;
    const startDate = this.pickerInput;
    const isAgreed = resvForm.isAgreed;
    console.log(startDate);
    const newResv = new Reservation(email, emailConf, resvForm.name , reason, startDate, isAgreed, '')
    
    return this.roomService.saveReservation(this.roomId, newResv)
      // navigates to the sibling route.. https://stackoverflow.com/questions/39124906/navigate-relative-with-angular-2-router-version-3
      // navigates to lists route, so user can see updated list.
      .then(() => this.router.navigate(["../reservations"], { relativeTo: this.route }));
  }

  toggleNewReason(toggle: boolean) {
    toggle = !toggle
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
