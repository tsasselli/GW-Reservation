export interface Reservation {
    email: string;
    emailConfirmation: string;
    reason: string;
    date: Date;
    isAgreed?: string;
    id?: string;
}
