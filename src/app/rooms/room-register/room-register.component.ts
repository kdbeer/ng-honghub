import { AppState } from 'app/reducers';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { createRoomOpen } from '../rooms.selectors';
import { AddRoomClose, AddRoomConfirm } from '../rooms.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-room-register',
  templateUrl: './room-register.component.html',
  styleUrls: ['./room-register.component.scss']
})
export class RoomRegisterComponent implements OnInit {
  open$: Observable<boolean>;
  form: FormGroup;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      type: ['', [Validators.required, Validators.minLength(1)]],
      building: ['kbtg', [Validators.required, Validators.minLength(1)]],
      floor: ['', [Validators.required, Validators.minLength(1)]],
      capacity: [0]
    });
  }

  ngOnInit() {
    this.open$ = this.store.pipe(select(createRoomOpen));
  }

  closeModal(e) {
    this.store.dispatch(new AddRoomClose());
  }

  onSubmit(e) {
    console.log(e);
    if (!this.form.valid) {
      return;
    }

    this.store.dispatch(new AddRoomConfirm({ newRoom: e }));
  }
}
