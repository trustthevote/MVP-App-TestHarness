/* eslint-disable max-len */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, AlertController, LoadingController, NavController } from "@ionic/angular";


@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.page.html',
  styleUrls: ['./ballot.page.scss'],
})
export class BallotPage {
  signupForm: FormGroup;
  isSubmitted = false;
  results = []
  constructor(
    public formBuilder: FormBuilder,
    public toastController: ToastController,
    private router: Router,
    private alertctrl: AlertController,) {
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

  ngOnInit() {
    localStorage.clear();
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['ballot'];
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
  async presentAlertEmpty(msg) {
    const alert = await this.alertctrl.create({
      message: msg,
      buttons: [{
        text: this.results['try_again'],
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => { }
      }
      ]
    });
    await alert.present();
  }

  submitForm() {
    this.isSubmitted = true;

    if (!this.signupForm.valid) {
      // this.presentToast(this.results['tm']);
      this.presentAlertEmpty(this.results['alert_msg']);
      return false;
    } else {
      const naviExtras: NavigationExtras = {
        state: {
          user: this.signupForm.value
        }
      };
      localStorage.setItem('userNameInfo', JSON.stringify(this.signupForm.value));
      this.router.navigate(['ballot-form', { t: new Date().getTime() }], naviExtras);
      this.signupForm.reset();
    }
  }
}
