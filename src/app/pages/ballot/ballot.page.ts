/* eslint-disable max-len */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.page.html',
  styleUrls: ['./ballot.page.scss'],
})
export class BallotPage {
  signupForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z-( )]+$')
        ]
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z-( )]+$')
        ]
      ],
   });
  }

  get errorControl() {
    return this.signupForm.controls;
  }

  submitForm() {
    console.log(this.signupForm.value);
    this.isSubmitted = true;
    if (!this.signupForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.signupForm.value);
    }
  }
}
