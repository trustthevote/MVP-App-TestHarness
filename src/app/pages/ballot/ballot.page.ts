import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

import { UserService } from 'src/app/class/user/user.service';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.page.html',
  styleUrls: ['./ballot.page.scss'],
})
export class BallotPage implements OnInit {
  signupForm: FormGroup;
  isSubmitted = false;
  results = [];

  constructor(
    public formBuilder: FormBuilder,
    public toastController: ToastController,
    private router: Router,
    private alertctrl: AlertController,
    private userService: UserService
  ) {
    this.signupForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z-( )][\x20-\x7F]+$'), // allow only letters, spaces, hyphens and PrintableASCII chars
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z-( )][\x20-\x7F]+$'), // allow only letters, spaces, hyphens and PrintableASCII chars
        ],
      ],
    });
  }

  ngOnInit() {
    this.userService.resetUser();
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].ballot;
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
      duration: 2000,
    });
    toast.present();
  }

  async presentAlertEmpty(msg) {
    const alert = await this.alertctrl.create({
      message: msg,
      buttons: [
        {
          text: (this.results as any).try_again,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {},
        },
      ],
    });
    await alert.present();
  }

  submitForm() {
    this.isSubmitted = true;

    if (!this.signupForm.valid) {
      this.presentAlertEmpty((this.results as any).alert_msg);
      return false;
    } else {
      const naviExtras: NavigationExtras = {
        state: {
          user: this.signupForm.value,
        },
      };
      this.userService.upsertUser(this.signupForm.value);
      this.router.navigate(['ballot-form', { t: new Date().getTime() }], naviExtras);
      this.signupForm.reset();
    }
  }
}
