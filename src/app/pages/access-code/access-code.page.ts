import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController, LoadingController, NavController } from "@ionic/angular";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { StatuscodeService } from 'src/app/api/statuscode.service';
import { AvclientService } from 'src/app/api/avclient.service';

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
    private loadingctrl: LoadingController,
    public statuscodeService: StatuscodeService,
    public avclientService: AvclientService) {
    this.createOTPForm();
  }

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['access_code'];
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
      index = "";
    } else if (index === 2) {
      if (event.which !== 8) {
        console.log(this.second);
        this.third.nativeElement.focus();
      } else if (event.target.value.length <= 0) {
        this.first.nativeElement.focus();
      }
      index = "";
    } else if (index === 3) {
      if (event.which !== 8) {
        console.log(this.second);
        this.four.nativeElement.focus();
      } else if (event.target.value.length <= 0) {
        this.second.nativeElement.focus();
      }
      index = "";
    } else if (index === 4) {
      if (event.which !== 8) {
        console.log(this.second);
        this.five.nativeElement.focus();
      } else if (event.target.value.length <= 0) {
        this.third.nativeElement.focus();
        index = "";
      }
    } else {
      if (event.which === 8 && event.target.value.length <= 0) {
        this.four.nativeElement.focus();
      }
      index = "";
    }
  }

  async nextbtn() {
    let enteredOtp: string;
    enteredOtp = this.getOtpValue()
    this.data = enteredOtp;
    if (this.data == '') {
      this.presentAlertEmpty();
    } else {
      this.disabledbutton = true;
      const loading = await this.loadingctrl.create({
        message: 'Check Authorization....',
      });
      await loading.present();

      return new Promise(resolve => {
        loading.dismiss();
        this.avclientService.validateAccessCode(this.data, '').catch(res => {
          console.log("res", res);
        });
        this.avclientService.constructBallotCryptograms(this.data).catch(res => {
          console.log("res", res);
        });
        this.avclientService.spoilBallotCryptograms(this.data).catch(res => {
          console.log("res", res);
        }); 
        this.avclientService.submitBallotCryptograms(this.data).catch(res => {
          console.log("res", res);
        }); 
        if (this.data == '00002') {
          this.route.navigate(['/ballot-prep-error']);
        } else if (this.data == '00003') {
          this.route.navigate(['/expired-code']);
        } else if (this.data == '00004') {
          this.route.navigate(['/failed-authorization']);
        } else if (this.data == '00005') {
          this.route.navigate(['/check-network-access00005-error']);
        } else if (this.data == '00006') {
          this.route.navigate(['/ballot-test-error']);
        } else if (this.data == '00007') {
          this.route.navigate(['/network-error-access-code']);
        } else if (this.data == '00008') {
          this.route.navigate(['/ballot-oops-screen']);
        } else if (this.data == '00009') {
          this.route.navigate(['/ballot-test-fail-err']);
        }
        else if (this.data == '00010') {
          this.route.navigate(['/network-error-access-ten']);
        } else if (this.data == '00011') {
          this.route.navigate(['/server-commit-network-error-access']);
        } else if (this.data == '00012') {
          this.route.navigate(['/network-error-access12']);
        }else if (this.data == '00013') {
          this.route.navigate(['/ballot-access-error13']);
        }
        
        else {
          this.route.navigate(['/before-you-finish']);
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
      message: this.results['alert_msg'],
      buttons: [{
        text: 'Retry',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => { }
      }]
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
    this.route.navigate(['/request-access-code']);
  }
}
