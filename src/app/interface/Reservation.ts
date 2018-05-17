export class Reservation {

    constructor(public email: string, 
                public emailConfirmation: string, 
                public name: string,
                public reason: string, 
        public startDate: { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'}, 
                public isAgreed?: string,
                public id?: string) { }
}
