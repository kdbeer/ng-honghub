import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, MainRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [FormsModule, ReactiveFormsModule]
})
export class MainModule {}
