import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastRoutingModule } from './toast-routing.module';
import { ToastComponent } from './toast.component';
import { ToastItemComponent } from './toast-item/toast-item.component';

@NgModule({
  imports: [CommonModule, ToastRoutingModule],
  declarations: [ToastComponent, ToastItemComponent],
  exports: [ToastComponent]
})
export class ToastModule {}
