export class Reservation {

    constructor(public email: string, 
                public emailConfirmation: string, 
                public name: string,
                public reason: string, 
                public startDate: string,
                public endDate: string, 
                public isAgreed?: string,
                public id?: string) { }
}
