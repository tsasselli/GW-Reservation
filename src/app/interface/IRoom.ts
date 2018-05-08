import { Reservation } from './Reservation';

export class IRoom {
    // id: string;
    // name: string;
    // picture?: string;
    // reservations?: Reservation[]; // pass all the reservation objects along with the room interface. 


constructor(public id: string, 
            public name: string,
            public picture: string,
            public reservations: Reservation[]) {

}

}