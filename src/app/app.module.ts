import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';

import { environment } from './../environments/environment';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavAuthComponent } from './navbar/nav-auth/nav-auth.component';
import { NavBarComponent } from './navbar/nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReservationFormComponent } from './room/reservation-form/reservation-form.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { RoomComponent } from './room/room.component';
import { AuthService } from './service/auth.service';
import { RoomService } from './service/room.service';
import { UserService } from './service/user.service';
import { HomeComponent } from './welcome/home/home.component';

const routes: Routes = [
    {   path: 'welcome', component: HomeComponent },
    {   path: 'about', component: AboutComponent }, 
    {   path: 'rooms/:id', component: RoomComponent }, 
    {   path: 'rooms/:id/form', component: ReservationFormComponent },
    {   path: 'rooms/:id/list', component: RoomListComponent },
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
        RoomComponent,
        AboutComponent,
        NotFoundComponent,
        ReservationFormComponent,
        RoomListComponent,
    ],
     imports: [
        BrowserModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
         FormsModule,
         CustomFormsModule,
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