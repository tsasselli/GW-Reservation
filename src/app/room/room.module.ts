import { RoomService } from './../service/room.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { RoomRoutingModule, routingComponents } from './room-routing.module';
import { ReservationListResolverService } from './reservation-list-resolver.service';

@NgModule({
    imports: [ RoomRoutingModule,
               FormsModule,
               CommonModule, 
               CustomFormsModule,
               NgbModule.forRoot(),
             ],
    declarations: [routingComponents],
    providers: [RoomService, ReservationListResolverService]

})

export class RoomModule {}  