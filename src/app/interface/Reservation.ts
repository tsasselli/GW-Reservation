export interface Reservation {
    id?: string;
    email: string;
    emailConfirmation: string;
    reason: string;
    startTime: string;
    endTime: string;
    isAgreed: string;
    // [propName: string]: any;  /// https://github.com/angular/angularfire2/issues/1299
}