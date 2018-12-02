import { CloseReserveModal } from './../reserve.actions';
import { AppState } from 'app/reducers';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { selectReserveRequestssss } from '../user.selectors';

@Component({
  selector: 'app-confirm-reserve-modal',
  templateUrl: './confirm-reserve-modal.component.html',
  styleUrls: ['./confirm-reserve-modal.component.scss']
})
export class ConfirmReserveModalComponent implements OnInit {
  open$: Observable<boolean>;
  form: FormGroup;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['kbtg', [Validators.required, Validators.minLength(1)]],
      phone: ['', [Validators.required, Validators.minLength(1)]],
      agenda: ['']
    });
  }

  ngOnInit() {
    this.open$ = this.store.pipe(select(selectReserveRequestssss));
    this.store.pipe(select(selectReserveRequestssss)).subscribe(res => {
      console.log(res);
    });
  }

  onSubmit(e) {
    if (!this.form.valid) {
      return;
    }

    console.log(e);
    // this.store.dispatch(new ConfirmSearchAvailable({ json: e }));
  }

  close(e) {
    console.log(e);
    this.store.dispatch(new CloseReserveModal());
  }
}
