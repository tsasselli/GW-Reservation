import { NotFoundComponent } from './not-found/not-found.component';
import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

import { environment } from './../environments/environment';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavAuthComponent } from './navbar/nav-auth/nav-auth.component';
import { NavBarComponent } from './navbar/nav-bar/nav-bar.component';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { HomeComponent } from './welcome/home/home.component';
import { RoomComponent } from './room/room.component';
import { RoomService } from './service/room.service';

const routes: Routes = [
    {   path: 'welcome', component: HomeComponent},
    {   path: 'about', component: AboutComponent },
    {   path: 'room/:id', component: RoomComponent },
    {   
        path: '', 
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    { path: '**',component: NotFoundComponent }
];


@NgModule ({
    declarations: [
        AppComponent,
        NavBarComponent,
        LoginComponent,
        NavAuthComponent,
        HomeComponent,
        LogoutComponent,
        RoomComponent,
        AboutComponent,
        NotFoundComponent,
    ],
     imports: [
        BrowserModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
         NgbModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        RouterModule.forRoot(routes)
    ],
    providers: [
        AuthService,
        UserService,
        RoomService,
    ],
      bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}