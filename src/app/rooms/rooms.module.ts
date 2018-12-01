import { reducers } from './../reducers/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { StoreModule } from '@ngrx/store';
import * as fromRooms from './rooms.reducers';
import { SearchPanelComponent } from './search-panel/search-panel.component';

@NgModule({
  declarations: [RoomsComponent, SearchPanelComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    RoomsRoutingModule,
    StoreModule.forFeature('rooms', fromRooms.reducers)
  ]
})
export class RoomsModule {}
