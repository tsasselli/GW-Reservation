import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'gw-application',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent { 

    constructor(private auth: AuthService,
                private router: Router,
                private userService: UserService) {
        auth.user$.subscribe(user => {
            if (!user) {
                return;
            } else {
                userService.save(user);// saves or updates user object to db.
                const returnUrl = localStorage.getItem('returnUrl');
                if (!returnUrl) { return; }
                if (returnUrl) {
                    // removes from localStroage and navigates by returnUrl value
                    localStorage.removeItem('returnUrl');
                    router.navigateByUrl(returnUrl);
                }
            }
        });
    }
}
