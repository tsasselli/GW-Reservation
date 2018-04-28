import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavAuthComponent } from './nav-auth/nav-auth.component';

@NgModule ({
    declarations: [
        AppComponent,
        NavBarComponent,
        LoginComponent,
        NavAuthComponent,
    ],
     imports: [
        BrowserModule
    ],
      bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}