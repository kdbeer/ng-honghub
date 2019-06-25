import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'app/state';
import { RegisterResidentRequest } from '../../resident.actions';

@Component({
  selector: 'app-register-resident',
  templateUrl: './register-resident.component.html',
  styleUrls: ['./register-resident.component.scss']
})
export class RegisterResidentComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store$: Store<AppState>
  ) {
    this.form = this.fb.group({
      name: [null],
      number_of_floors: [null],
      size: [null],
      type: [null],
      description: [null],
      image: [null],
      address: [null],
      city: [null],
      province: [null],
      nation: ['ไทย']
    });
  }

  ngOnInit() {}

  cancel() {
    this.router.navigateByUrl('resident/management');
  }

  submit() {
    if (!this.form.valid) {
      return;
    }

    const json = this.form.value;
    this.store$.dispatch(new RegisterResidentRequest({ json: json }));
  }
}
