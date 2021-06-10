/* eslint-disable max-len */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.page.html',
  styleUrls: ['./ballot.page.scss'],
})
export class BallotPage {
  signupForm: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public toastController: ToastController,
    private router: Router) {
    this.signupForm = this.formBuilder.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z-( )][\x20-\x7F]+$') // allow only letters, spaces, hyphens and PrintableASCII chars
        ]
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z-( )][\x20-\x7F]+$') // allow only letters, spaces, hyphens and PrintableASCII chars
        ]
      ],
   });
  }

  get errorControl() {
    return this.signupForm.controls;
  }

  async presentToast(mess) {
    const toast = await this.toastController.create({
      cssClass: 'toast',
      message: mess,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  submitForm() {
    this.isSubmitted = true;

    if (!this.signupForm.valid) {
      this.presentToast('Please provide all the required values!');
      return false;
    } else {
      const naviExtras: NavigationExtras = {
        state: { user: this.signupForm.value }
      };
      this.router.navigate(['ballot-form'], naviExtras);
      this.signupForm.reset();
    }
  }
}
