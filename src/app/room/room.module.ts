import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { RoomService } from './../service/room.service';
import { RoomRoutingModule, routedComponents } from './room-routing.module';

@NgModule({
    imports: [RoomRoutingModule,
              FormsModule,
              CommonModule, 
              CustomFormsModule],
    declarations: [ routedComponents ],
})

export class RoomModule {}  