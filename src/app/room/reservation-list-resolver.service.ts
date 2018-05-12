import { RoomComponent } from './components/room.component';
import { RoomService } from './../service/room.service';
import { IRoom } from './../interface/IRoom';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ReservationListResolverService implements Resolve<IRoom>{

  constructor(private roomService: RoomService) { }

  resolve(route: ActivatedRouteSnapshot, rState: RouterStateSnapshot) : Observable<IRoom> {
    const id = route.paramMap.get('id');
    return this.roomService.getRoomById('id');
  }

}
