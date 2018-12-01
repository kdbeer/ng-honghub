import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoomReserveComponent } from './room-reserve/room-reserve.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RoomReserveModalComponent } from './room-reserve-modal/room-reserve-modal.component';
import { StoreModule } from '@ngrx/store';
import * as fromReserve from './reserve.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ReserveEffects } from './reserve.effects';
import { ReserveAbleComponent } from './reserve-able/reserve-able.component';
import { ConfirmReserveModalComponent } from './confirm-reserve-modal/confirm-reserve-modal.component';

@NgModule({
  declarations: [
    UserComponent,
    RoomReserveComponent,
    RoomReserveModalComponent,
    ReserveAbleComponent,
    ConfirmReserveModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    NgxDatatableModule,
    StoreModule.forFeature('reserveState', fromReserve.reducer),
    EffectsModule.forFeature([ReserveEffects])
  ]
})
export class UserModule {}
