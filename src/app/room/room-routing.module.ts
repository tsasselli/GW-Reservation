import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomService } from './../service/room.service';
import { NewRoomFormComponent } from './components/new-room-form/new-room-form.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { RoomReservationsComponent } from './components/room-reservations/room-reservations.component';
import { RoomComponent } from './components/room.component';

const routes: Routes = [
 //  { path: 'room/new', component: NewRoomFormComponent },
    {
        path: "rooms/:id",
        component: RoomComponent,
        children: [
            {   path: 'form', component: ReservationFormComponent },
            {   path: 'reservations',
                component: RoomReservationsComponent
            },
            {
                path: "",
                redirectTo: "reservations",
                pathMatch: "full"
            },
            {
                path: "**",
                redirectTo: "/not/found",
                pathMatch: "full"
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [RoomService]
})
export class RoomRoutingModule { }

export const routingComponents = [RoomComponent, ReservationFormComponent, RoomReservationsComponent, NewRoomFormComponent]

