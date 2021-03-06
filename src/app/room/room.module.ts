import { ReasonService } from './../service/reason.service';
import { RoomReservationsComponent } from './components/room-reservations/room-reservations.component';
import { BrowserModule } from '@angular/platform-browser';
import { RoomService } from './../service/room.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { RoomRoutingModule, routingComponents } from './room-routing.module';
import { ReservationListResolverService } from './reservation-list-resolver.service';
import { OwlNativeDateTimeModule, OwlDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginGuardService } from '../service/login-guard.service';

@NgModule({
    imports: [ RoomRoutingModule,
               FormsModule,
               CommonModule, 
               CustomFormsModule,
               BrowserModule,
               BrowserAnimationsModule,
               OwlDateTimeModule,
               OwlNativeDateTimeModule,
               NgbModule.forRoot(),
             ],
    declarations: [routingComponents],
    providers: [ RoomService, ReservationListResolverService, ReasonService, LoginGuardService ] 

})

export class RoomModule {}  