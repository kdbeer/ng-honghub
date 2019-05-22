import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentRoutingModule } from './resident-routing.module';
import { RegisterResidentComponent } from './pages/register-resident/register-resident.component';

@NgModule({
  declarations: [RegisterResidentComponent],
  imports: [
    CommonModule,
    ResidentRoutingModule
  ]
})
export class ResidentModule { }
