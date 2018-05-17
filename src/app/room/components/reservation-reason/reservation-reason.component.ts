import { IReason } from './../../../interface/IReason';
import { ReasonService } from './../../../service/reason.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gw-reservation-reason',
  templateUrl: './reservation-reason.component.html',
  styleUrls: ['./reservation-reason.component.scss']
})

export class ReservationReasonComponent implements OnInit {
  reason$;

  constructor(private reasonService: ReasonService) { }

  ngOnInit() {
   this.reason$ = this.reasonService.reason$
   console.log(this.reason$);
  }

  saveNewReason(reason: IReason) {
    this.reasonService.saveToDb(reason)
    console.log(reason);
  }
}
