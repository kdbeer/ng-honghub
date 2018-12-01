import { ToastService } from './service/toast.service';
import { Component, OnInit } from '@angular/core';
import { ToastMessage } from '.';
const TIMEOUT = 5000;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  toastItems: ToastMessage[];

  constructor(private ts: ToastService) {
    this.toastItems = [];
  }

  ngOnInit() {
    this.ts.toastObserver$.subscribe(
      res => {
        if (res === null) {
          return;
        }
        this.toastItems.push(res);
        setTimeout(() => {
          this.dismissed(res.id);
        }, TIMEOUT);
      },
      err => {
        console.log(err);
      }
    );
  }

  dismissed(id) {
    this.toastItems.splice(this.toastItems.findIndex(m => m.id === id), 1);
  }

  onToastClosed(event) {
    this.dismissed(event);
  }
}
