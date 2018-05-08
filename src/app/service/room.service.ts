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
  };

  saveReservation(roomId, reservation) {
    // creates a function that allows us to pass the roomID in through the queryParams being intitalized in(ngOnInit)
    // in the Room-Form Component.. then makes a new path under reservations in the db and push the new resv object.
    return this.db.list("rooms/" + roomId + "/reservations").push(reservation);
  };

  createRoom(room: IRoom) {
    return this.db.list("rooms").push(room);
  };

  getRoomById(id): Observable<IRoom> {
    return this.getRoomWithReservation(id);
  };

  private getRoom(id): Observable<IRoom> {
    return this.rooms$
      // first have to map through rooms to find the room equal to the input id
      .map((rooms: IRoom[]) => rooms.find(room => room.id === id))
      // returns an object/observable with an unparsed reservations array.
  }

  private getRoomWithReservation(id): Observable<IRoom> {
      return this.getRoom(id).map((room: IRoom) => {
        const reservations = [];
        // loop through the reservations array attached to IRoom
        for (let resKey in room.reservations) {
          const reservation = room.reservations[resKey];
          reservation.id = resKey; // attaches the id/key to reservation
          reservations.push(reservation); // pushes it into the reservations array
        }
        // assign the room.reservations param to the looped reservations array 
        room.reservations = reservations;
        return room;
      });
    };

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