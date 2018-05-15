import { Observable } from 'rxjs';
import { Room } from '../interface/Room';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { map, catchError } from 'rxjs/operators';
import { debug } from 'util';

@Injectable()

export class RoomService {
  // create an observable to store IRoom value
  rooms$: Observable<Room[]>;

  constructor(private db: AngularFireDatabase) {
    const room: AngularFireList<Room> = this.db.list("rooms");
    this.rooms$ = room.valueChanges();
  };

  // creates a function that allows us to pass the roomID in through the queryParams being intitalized in(ngOnInit)
  // in the Room-Form Component.. then makes a new path under reservations in the db and push the new resv object.
  saveReservation(roomId, reservation) {
    return this.db.list("rooms/" + roomId + "/reservations").push(reservation);
  };

  createRoom() {
    return this.db.list("rooms");
  }

  getRoomById(id): Observable<Room> {
    return this.getRoomWithReservation(id);
  }

  private getRoom(id): Observable<Room> {
    return this.rooms$.pipe(
      // first have to map through rooms to find the room equal to the input id
      map((rooms: Room[]) => rooms.find(room => room.id === id)))
    // returns an object/observable with an unparsed reservations array.
  }

  private getRoomWithReservation(id): Observable<Room> {
    return this.getRoom(id)
      .map((room: Room) => {
        const reservations = [];
        // loop through the reservations array attached to IRoom
        // unpacks the reservatoins array so it can be used in Observable < IRoom >
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

// use .pipe() to make map chaining treeShakable, better perfomance than
  // previous implementation (below) notes attached to prev implementation 
//   getRoomById(id): Observable<IRoom> {
//     console.log(id);
//     return this.rooms$.pipe(
//       map((rooms: IRoom[]) => rooms.find(room => room.id === id)),
//       map((room: IRoom) => {
//         const reservations = [];
//         if (!room || !room.reservations.length) return;
//         for (let resKey in room.reservations) {
//           const reservation = room.reservations[resKey];
//           reservation.id = resKey;
//           reservations.push(reservation);
//         }
//         room.reservations = reservations;
//         return room;
//       })
//     )
//   }
// }
  // getRoomById(id): Observable<IRoom> {
  //   return this.getRoomWithReservation(id);
  // };

//   private getRoom(id): Observable<IRoom> {
//     return this.rooms$
//       // first have to map through rooms to find the room equal to the input id
//       .map((rooms: IRoom[]) => rooms.find(room => room.id === id))
//       // returns an object/observable with an unparsed reservations array.
//   }
// }
  // private getRoomWithReservation(id): Observable<IRoom> {
  //     return this.getRoom(id).map((room: IRoom) => {
  //       const reservations = [];
  //       // loop through the reservations array attached to IRoom
           // unpacks the reservatoins array so it can be used in Observable<IRoom>
  //       for (let resKey in room.reservations) {
  //         const reservation = room.reservations[resKey];
  //         reservation.id = resKey; // attaches the id/key to reservation
  //         reservations.push(reservation); // pushes it into the reservations array
  //       }
  //       // assign the room.reservations param to the looped reservations array 
  //       room.reservations = reservations;
  //       return room;
  //     });
  //   };

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