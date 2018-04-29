import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { NavAuthComponent } from './navbar/nav-auth/nav-auth.component';
import { NavBarComponent } from './navbar/nav-bar/nav-bar.component';
import { HomeComponent } from './welcome/home/home.component';


@NgModule ({
    declarations: [
        AppComponent,
        NavBarComponent,
        LoginComponent,
        NavAuthComponent,
        HomeComponent,
    ],
     imports: [
        BrowserModule,
         AngularFireDatabaseModule,
         AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
         ])
    ],
    providers: [
        AuthService,
    ],
      bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}