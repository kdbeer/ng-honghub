import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastMessage } from '..';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private _toastObserver$ = new Subject<ToastMessage>();
  readonly toastObserver$ = this._toastObserver$.asObservable();

  increment = 0;
  constructor() {}

  showErrorMessage(m: string) {
    this.createMessage(m, 'danger');
  }
  showInfoMessage(m: string) {
    this.createMessage(m, 'info');
  }
  showWarningMessage(m: string) {
    this.createMessage(m, 'warning');
  }
  showSuccessMessage(m: string) {
    this.createMessage(m, 'success');
  }

  createMessage(m: string, style?) {
    const newMessage: ToastMessage = {
      id: this.increment,
      content: m,
      dismissed: true,
      style: style || 'info'
    };

    this._toastObserver$.next(newMessage);
    this.increment++;
  }
}
