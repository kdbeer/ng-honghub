import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from 'app/reducers';
import { selectReserveModalOpen } from '../user.selectors';
import { CloseSearchModal, ConfirmSearchAvailable } from '../reserve.actions';

@Component({
  selector: 'app-room-reserve-modal',
  templateUrl: './room-reserve-modal.component.html',
  styleUrls: ['./room-reserve-modal.component.scss']
})
export class RoomReserveModalComponent implements OnInit {
  open$: Observable<boolean>;
  form: FormGroup;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.form = this.fb.group({
      building: ['kbtg', [Validators.required, Validators.minLength(1)]],
      type: ['', [Validators.required, Validators.minLength(1)]],
      capacity: [0],
      duration: [0.5],
      start: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.open$ = this.store.pipe(select(selectReserveModalOpen));
  }

  closeModal(e) {
    // this.store.dispatch(new AddRoomClose());
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
