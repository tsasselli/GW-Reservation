import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
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
        HomeComponent
    ],
     imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'login', component: LoginComponent },
        ])
    ],
      bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}