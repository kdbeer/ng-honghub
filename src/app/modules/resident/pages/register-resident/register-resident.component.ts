import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-resident',
  templateUrl: './register-resident.component.html',
  styleUrls: ['./register-resident.component.scss']
})
export class RegisterResidentComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [null],
      number_of_floor: [null],
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
}
