import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastMessage } from '..';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'toast-item',
  templateUrl: './toast-item.component.html',
  styleUrls: ['./toast-item.component.scss']
})
export class ToastItemComponent implements OnInit {
  @Input()
  message: ToastMessage;

  @Output() toastClosed: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  close() {
    this.message.dismissed = false;
    this.toastClosed.emit(this.message.id);
  }
}
