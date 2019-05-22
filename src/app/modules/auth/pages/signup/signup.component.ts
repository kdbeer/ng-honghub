import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  purpose = [
    { name: 'search', text: 'ค้นหาห้อง' },
    { name: 'register', text: 'ฝากห้อง' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: [null],
      password: [null],
      confirm_password: [null],
      display_name: [null],
      purpose: ['search']
    });
  }

  ngOnInit() {}

  signup() {
    if (!this.form.valid) {
      return;
    }

    const json = this.form.value;

    console.log(json);
  }
}
