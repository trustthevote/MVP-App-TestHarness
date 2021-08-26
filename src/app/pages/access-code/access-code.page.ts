import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController,AlertController,LoadingController ,NavController} from "@ionic/angular";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-access-code',
  templateUrl: './access-code.page.html',
  styleUrls: ['./access-code.page.scss'],
})
export class AccessCodePage implements OnInit {
  OTP: string = '';
  otp: string = '';
  disabledbutton;
  otpError: string = '';
  alertController: any;
  otpForm: FormGroup;
  @ViewChild("first", {
    static: false
  }) first: ElementRef;
  @ViewChild("second", {
    static: false
  }) second: ElementRef;
  @ViewChild("third", {
    static: false
  }) third: ElementRef;
  @ViewChild("four", {
    static: false
  }) four: ElementRef;
  @ViewChild("five", {
    static: false
  }) five: ElementRef;
  @ViewChild("singUp", {
    static: false
  }) singUp: ElementRef;
  data: string;
  results = [];
  constructor(private route: Router, public fb: FormBuilder, private toastctrl: ToastController,
    private alertctrl: AlertController,
    private loadingctrl: LoadingController, ) {
    this.createOTPForm();
  }

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      // console.log("json", json);
      this.results = json[0]['access_code'];
      // console.log("results: ", this.results); 
    });
  }
  getOtpValue() {
    return (
      this.otpForm.controls.first.value +
      this.otpForm.controls.second.value +
      this.otpForm.controls.third.value +
      this.otpForm.controls.four.value +
      this.otpForm.controls.five.value
    );
  }
  createOTPForm() {
    this.otpForm = this.fb.group({
      first: [null, Validators.required],
      second: [null, Validators.required],
      third: [null, Validators.required],
      four: [null, Validators.required],
      five: [null, Validators.required],
    });
  }
  focusNext(event, index) {
    console.log(index);
    console.log(event);
    if (index === 1) {
      console.log(event.which !== 8);
      if (event.which !== 8) {
        console.log(this.second);
        this.second.nativeElement.focus();
      }
    } else if (index === 2) {
      if (event.which !== 8) {
        console.log(this.second);
        this.third.nativeElement.focus();
      } else if (event.target.value.length <= 0) {
        this.first.nativeElement.focus();
      }
    } else if (index === 3) {
      if (event.which !== 8) {
        console.log(this.second);
        this.four.nativeElement.focus();
      } else if (event.target.value.length <= 0) {
        this.second.nativeElement.focus();
      }
    } else if (index === 4) {
      if (event.which !== 8) {
        console.log(this.second);
        this.five.nativeElement.focus();
      } else if (event.target.value.length <= 0) {
        this.third.nativeElement.focus();
      }
    } else {
      if (event.which === 8 && event.target.value.length <= 0) {
        this.four.nativeElement.focus();
      }
    }
  }
  async nextbtn() {
    let enteredOtp: string;
    enteredOtp = this.getOtpValue()
    this.data = enteredOtp;
    if (this.data == '') {
      // this.presentToast(this.results['tm_ee']);
      this.presentAlertEmpty();
    } else {
      this.disabledbutton = true;
      const loading = await this.loadingctrl.create({
        message: 'Check Authorization....',
      });
      await loading.present();

      return new Promise(resolve => {
        if (this.data === '00000') {
          loading.dismiss();
          this.route.navigate(['/failed-authorization']);
        } else if (this.data === '00001') {
          loading.dismiss();
          // this.presentToast(this.results['tm_ev']);
          this.route.navigate(['/expired-code']);
          // this.otpError = "";

        }else if (this.data === '00002') {
          loading.dismiss();
          // this.presentToast(this.results['tm_ev']);
          this.route.navigate(['/check-network']);
          // this.otpError = "";

        }
         else {
          loading.dismiss();
          this.route.navigate(['/ballot-fingerprint']);
          this.otpError = "";
        }
        (err) => {
          loading.dismiss();
          this.disabledbutton = false;
          this.presentAlertConfirm('Timeout');
        }
      });
    }
  }

  async presentAlertEmpty() {
		const alert = await this.alertctrl.create({
			// header: 'Confirm!',
			message: this.results['alert_msg'],
			buttons: [{
				text: 'Retry',
				role: 'cancel',
				cssClass: 'secondary',
				handler: (blah) => {}
			}
      // , {
			// 	text: 'Close App',
			// 	handler: () => {
			// 	}
			// }
    ]
		});
		await alert.present();
	}


  async presentToast(a) {
    const toast = await this.toastctrl.create({
      message: a,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  async presentAlertConfirm(a) {
    const alert = await this.alertController.create({

      header: a,
      backdropDissmiss: false,
      buttons: [{
        text: 'Cancel',

        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {

          console.log('Confirm Okay');
        }
      }]
    });

    await alert.present();
  }
  backbtn() {
    this.route.navigate(['/ballot-complete']);
  }
}
