import { Reservation } from './Reservation';

export class Room {

    constructor(public id: string,
        public name: string,
        public picture: string,
        public reservations?: Reservation[]) {
    }
}