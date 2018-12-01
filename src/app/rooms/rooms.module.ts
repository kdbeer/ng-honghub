import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [RoomsComponent],
  imports: [CommonModule, NgxDatatableModule, RoomsRoutingModule]
})
export class RoomsModule {}
