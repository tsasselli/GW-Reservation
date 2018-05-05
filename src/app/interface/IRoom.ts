import { Reservation } from './Reservation';

export interface IRoom {
    id: string;
    title: string;
    picture?: string;
    reservations?: Reservation[]; // pass all the reservation objects along with the room interface. 
}