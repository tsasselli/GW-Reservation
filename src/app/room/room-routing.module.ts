import { LoginGuardService } from './../service/login-guard.service';
import { ReservationReasonComponent } from './components/reservation-reason/reservation-reason.component';
import { ReservationListResolverService } from './reservation-list-resolver.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewRoomFormComponent } from './components/new-room-form/new-room-form.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { RoomReservationsComponent } from './components/room-reservations/room-reservations.component';
import { RoomComponent } from './components/room.component';

const routes: Routes = [
    {   path: 'room/new', component: NewRoomFormComponent },
    {
        path: "rooms/:id/",
        // resolve: { resvList: ReservationListResolverService },
        component: RoomComponent,
        canActivate: [LoginGuardService],
        children: [
            {   path: 'form', component: ReservationFormComponent },
            { path: 'reservations', /*resolve: { resvList: ReservationListResolverService },*/ component: RoomReservationsComponent },
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
})
export class RoomRoutingModule { }

export const routingComponents = [ RoomComponent, ReservationFormComponent, RoomReservationsComponent, NewRoomFormComponent, ReservationReasonComponent ]

