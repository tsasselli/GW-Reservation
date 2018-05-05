import { Observable } from 'rxjs/Observable';
import { IRoom } from './../interface/IRoom';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';

@Injectable()

export class RoomService {
  // create an observable to store IRoom value
    rooms$: Observable<IRoom[]>;

  constructor(private db: AngularFireDatabase) { 
    const room: AngularFireList<IRoom> = this.db.list("rooms");
    this.rooms$ = room.valueChanges();
  }
    // this.rooms = [{
    //   id: "1",
    //   title: "starfox",
    //   picture: "starfox.jpg"
    // }, {
    //   id: "2",
    //   title: "halo",
    //   picture: "halo.jpg"
    // }, {
    //   id: "3",
    //   title: "sonic",
    //   picture: "sonic.jpg"
    // }, {
    //   id: "4",
    //   title: "zelda",
    //   picture: "zelda.jpg"
    // }];


  saveReservationToDb(roomId, reservation) {
    // creates a function that allows us to pass the roomID in through the queryParams being intitalized in(ngOnInit)
    // in the Room-Form Component.. then makes a new path under reservations in the db and push the new resv object.
    return this.db.list("rooms/" + roomId + "/reservations").push(reservation);
  }
}
 