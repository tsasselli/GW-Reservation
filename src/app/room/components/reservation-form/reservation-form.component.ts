import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { IReason } from '../../../interface/IReason';
import { Reservation } from '../../../interface/Reservation';
import { ReasonService } from '../../../service/reason.service';
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
  user: AppUser;
  startTime: Date;
  endTime: Date;
  userName: string;
  userEmail: string;
  reservation: Reservation;
  reason$: Observable<IReason[]>;
  showNewReasonForm: boolean = false;

  constructor(private roomService: RoomService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private reasonService: ReasonService) { }

  ngOnInit() {
   this.getParentRouteId();
   this.getUser();
   this.setDefaultTime();
   this.reason$ = this.reasonService.reason$;
   this.startTime;
   console.log(this.startTime);
    //this.testId();
  }

  save(resvForm) {
    const reason: string = resvForm.reason;
    const email: string = resvForm.email;
    const emailConf: string = resvForm.emailConfirmation;
    const startDate: string = resvForm.startTime.toString();
    const endDate: string = resvForm.endTime.toString();
    const isAgreed = resvForm.isAgreed;

    const newResv = new Reservation(email, emailConf, resvForm.name , reason, startDate, endDate, isAgreed, '')
    
    return this.roomService.saveReservation(this.roomId, newResv)
      // navigates to the sibling route.. https://stackoverflow.com/questions/39124906/navigate-relative-with-angular-2-router-version-3
      // navigates to lists route, so user can see updated list.
      .then(() => this.router.navigate(["../reservations"], { relativeTo: this.route }));
  }

  toggleNewReason(toggle: boolean) {
    toggle = !toggle
  }

  private getParentRouteId() {
    // gets the params and uses changeRoomID to assign it to local property roomID
    this.route.parent.paramMap.subscribe(params => {
      this.assignRoomId(params.get('id'));
    })
  }

  private getStartDate() {
    const date = new Date();
    date.setHours(date.getHours() + 1);
    date.setMinutes(0);
    date.setSeconds(0);
    console.log(date);
    return date;
  }

  private getEndDate() {
    const date = this.getStartDate();
    date.setHours(date.getHours() + 1);
    console.log(date);
    return date;
  }

  private setDefaultTime() {
    this.startTime = this.getStartDate()
    this.endTime = this.getEndDate()
    console.log(this.endTime)
  }

  private getUser() {
    this.authService.appUser$.subscribe(user => {
      this.user = user;
      this.userName = user.name;
      this.userEmail = user.email;
    });
  }

  // helper func for storing params/:id  to roomId
  private assignRoomId(id: string) {
    this.roomId = id;
    this.roomID = this.roomId ? this.roomId.charAt(0).toUpperCase() + this.roomId.substr(1).toLowerCase() : "";
  }

  // private testId() {
  //   console.log(this.roomService.getRoomById(this.roomId).subscribe(roomId => console.log(roomId)));
  // }

}
