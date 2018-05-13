import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { environment } from './../environments/environment';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavAuthComponent } from './navbar/nav-auth/nav-auth.component';
import { NavBarComponent } from './navbar/nav-bar/nav-bar.component';
import { RoomModule } from './room/room.module';
import { AuthService } from './service/auth.service';
import { RoomService } from './service/room.service';
import { UserService } from './service/user.service';


@NgModule ({
    declarations: [
        AppComponent,
        NavBarComponent,
        LoginComponent,
        NavAuthComponent,
        routedComponents,
    ],
     imports: [
        BrowserModule,
        // BrowserAnimationsModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        // OwlDateTimeModule,
        // OwlNativeDateTimeModule,
        RoomModule,
        AppRoutingModule,
    ],
    providers: [
        AuthService,
        UserService,
        RoomService
        ],
      bootstrap: [ AppComponent ]
})
export class AppModule {
}
