import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './welcome/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'welcome', component: HomeComponent },
  { path: 'rooms', loadChildren: './room/room-routing.module#RoomRoutingModule'},
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

export const routedComponents = [ HomeComponent, NotFoundComponent, AboutComponent ]

