import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { RoomRoutingModule, routingComponents } from './room-routing.module';

@NgModule({
    imports:  [RoomRoutingModule,
              FormsModule,
              CommonModule, 
              CustomFormsModule],
    declarations: [ routingComponents ],
})

export class RoomModule {}  