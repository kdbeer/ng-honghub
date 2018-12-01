import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { StoreModule } from '@ngrx/store';
import * as fromRooms from './rooms.reducers';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { RoomRegisterComponent } from './room-register/room-register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { RoomsEffects } from './rooms.effects';

@NgModule({
  declarations: [RoomsComponent, SearchPanelComponent, RoomRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    RoomsRoutingModule,
    StoreModule.forFeature('rooms', fromRooms.reducer),
    EffectsModule.forFeature([RoomsEffects])
  ]
})
export class RoomsModule {}
