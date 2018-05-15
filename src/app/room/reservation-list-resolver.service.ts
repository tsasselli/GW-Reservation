import { RoomComponent } from './components/room.component';
import { RoomService } from './../service/room.service';
import { Room } from '../interface/Room';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ReservationListResolverService implements Resolve<Room>{

  constructor(private roomService: RoomService) { }

  resolve(route: ActivatedRouteSnapshot, rState: RouterStateSnapshot) : Observable<Room> {
    const id = route.parent.paramMap.get('id');
    return this.roomService.getRoomById(id).map(room => {
      if (!room.reservations) return;

      room.reservations.forEach((reservation) => {
        console.log(reservation);
      });
      return room;
    })
  }

}
