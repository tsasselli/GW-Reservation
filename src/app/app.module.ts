import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavAuthComponent } from './navbar/nav-auth/nav-auth.component';
import { NavBarComponent } from './navbar/nav-bar/nav-bar.component';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { HomeComponent } from './welcome/home/home.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule ({
    declarations: [
        AppComponent,
        NavBarComponent,
        LoginComponent,
        NavAuthComponent,
        HomeComponent,
        LogoutComponent,
    ],
     imports: [
        BrowserModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
         NgbModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
         ])
    ],
    providers: [
        AuthService,
        UserService,
        
    ],
      bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}