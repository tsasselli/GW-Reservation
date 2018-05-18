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
  reservation: Reservation;
  user: AppUser;
  userName: string;
  userEmail: string;
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
   this.reason$ = this.reasonService.reason$;
    //this.testId();
  }

  save(resvForm) {
    const reason: string = resvForm.reason;
    const emailConf: string = resvForm.emailConfirmation;
    const email: string = resvForm.email;
    const startDate: string = this.editDateString(resvForm.startTime);
    const endDate: string = this.editDateString(resvForm.endTime);
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

  // private testId() {
  //   console.log(this.roomService.getRoomById(this.roomId).subscribe(roomId => console.log(roomId)));
  // }

  private getParentRouteId() {
    // gets the params and uses changeRoomID to assign it to local property roomID
    this.route.parent.paramMap.subscribe(params => {
      this.assignRoomId(params.get('id'));
    })
  }

  private editDateString (date: Date) : string {
    return date.toString();
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

}
