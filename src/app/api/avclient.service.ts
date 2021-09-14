import { Injectable } from '@angular/core';
import { StatuscodeService } from 'src/app/api/statuscode.service';
import { ToastController,AlertController,LoadingController ,NavController} from "@ionic/angular";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AvclientService {
  cachedAccessCode: any;
  serverURL: any;
  constructor(public statuscodeService: StatuscodeService,
    private alertctrl: AlertController,
    private route: Router, ) { }

  purgeData() {
    delete this.cachedAccessCode;
  }
  assignServerUrl(bulletinBoardURL){
    this.serverURL = bulletinBoardURL;
  }

  requestAccessCode(opaqueVoterId) {
    return new Promise((resolve, reject) => {
      switch (opaqueVoterId) {
        case 'T0000':
          reject(new Error(this.statuscodeService.statusCode('VoterRecordNotFound')));
          this.route.navigate(['/ballot-test-failed']);
          break;
        case 'T0001':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));
          this.route.navigate(['/check-network']);
          break;
        default:
          resolve(true);
          this.route.navigate(['/access-code']);
          break;
      }
    })
  }

  validateAccessCode(code, email) {
    return new Promise((resolve, reject) => {
      this.cachedAccessCode = code   
      switch (code) {
        case '00002':
          reject(new Error(this.statuscodeService.statusCode('CallOutOfOrderError')));         
          this.route.navigate(['/ballot-test-failed']);
          break;
        case '00003':
          reject(new Error(this.statuscodeService.statusCode('AccessCodeExpired')));
          this.route.navigate(['/expired-code']);
          break;
        case '00004':
          reject(new Error(this.statuscodeService.statusCode('AccessCodeInvalid')));
          this.route.navigate(['/failed-authorization']);
          break;
        case '00005':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));         
          this.route.navigate(['/check-network']);
          break;
        default:
          resolve(true);
          this.route.navigate(['/ballot-fingerprint']);
          break;
      }
    })
  }
  // Should not be idempotent.  Instead, permute one of
  // john's sample strings.
  constructBallotCryptograms(cvr) {
    return new Promise((resolve, reject) => {
      switch (this.cachedAccessCode) {
        case 'T0006':
          reject(new Error(this.statuscodeService.statusCode('CallOutOfOrderError')));
        case 'T0007':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));
        case 'T0008':
          reject(new Error(this.statuscodeService.statusCode('CorruptCVRError')));
        default:
          resolve('zyx098-wvu765-tsr432-1234');
      }
    })
  }

  spoilBallotCryptograms() {
    return new Promise((resolve, reject) => {
      switch (this.cachedAccessCode) {
        case 'T0009':
          reject(new Error(this.statuscodeService.statusCode('CallOutOfOrderError')));
        case 'T0010':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));
        case 'T0011':
          reject(new Error(this.statuscodeService.statusCode('ServerCommitmentError')));
        default:
          resolve(true);
      }
    })
  }

  submitBallotCryptograms() {
    return new Promise((resolve, reject) => {
      switch (this.cachedAccessCode) {
        case 'T0012':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));
        default:
          resolve({
            previousBoardHash: 'tsr432-wvu765-zyx098-4321',
            boardHash: 'zyx098-wvu765-tsr432-1234',
            registeredAt: '2020-03-01T10:00:00.000+01:00',
            serverSignature: 'dbcce518142b8740a5c911f727f3c02829211a8ddfccabeb89297877e4198bc1,46826ddfccaac9ca105e39c8a2d015098479624c411b4783ca1a3600daf4e8fa',
            voteSubmissionId: 6
          })
      }
    });
  }

  test(code) {
    this.purgeData();
    this.requestAccessCode(code);
    this.validateAccessCode(code, '');
    this.constructBallotCryptograms(code);
    this.spoilBallotCryptograms();
    this.constructBallotCryptograms(code);
    this.submitBallotCryptograms().then(receipt => {
      console.log(receipt)
    });
  }
  async presentAlertEmpty(Error) {
    const alert = await this.alertctrl.create({
      message: Error,
      buttons: [{
          text: 'Okay',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {}
        }
      ]
    });
    await alert.present();
  }
}
