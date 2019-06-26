import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule
  ]
})
export class MainModule {}
