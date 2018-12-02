import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from 'app/reducers';
import {
  CloseSearchModal,
  ConfirmSearchAvailable,
  ConfirmReserveClosed
} from '../reserve.actions';
import {
  selectReserveRequestssss,
  selectReserveModalOpen,
  selectReserveModalOpen2
} from '../user.selectors';

@Component({
  selector: 'app-room-reserve-modal',
  templateUrl: './room-reserve-modal.component.html',
  styleUrls: ['./room-reserve-modal.component.scss']
})
export class RoomReserveModalComponent implements OnInit {
  open$: Observable<boolean>;
  form: FormGroup;
  today = new Date();

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.form = this.fb.group({
      building: ['kbtg', [Validators.required, Validators.minLength(1)]],
      type: ['', [Validators.required, Validators.minLength(1)]],
      capacity: [2],
      duration: [0.5],
      start: [this.today, [Validators.required]]
    });
  }

  ngOnInit() {
    this.open$ = this.store.pipe(select(selectReserveModalOpen));
    // this.open$ = of(true);
  }

  closeModal() {
    this.store.dispatch(new ConfirmReserveClosed());
  }

  onSubmit(e) {
    if (!this.form.valid) {
      return;
    }

    this.store.dispatch(new ConfirmSearchAvailable({ json: e }));
  }

  searchPanelUnActivated(e) {
    console.log(e);
    this.store.dispatch(new CloseSearchModal());
  }
}
