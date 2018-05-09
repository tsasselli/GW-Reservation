import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        NgbModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
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
