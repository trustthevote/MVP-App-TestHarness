import { Injectable } from '@angular/core';
import { StatuscodeService } from 'src/app/api/statuscode.service';
import { Receipt } from 'src/app/class/receipt';
import { VoterartifactsService } from 'src/app/api/voterartifacts.service';

@Injectable({
  providedIn: 'root',
})
export class AvclientService {
  cachedAccessCode: any;
  serverURL: any;
  userObject: any;
  constructor(
    public statuscodeService: StatuscodeService,
    public voterartifactsService: VoterartifactsService
  ) {}

  initServerURL(bulletinBoardURL) {
    this.serverURL = bulletinBoardURL; // to be used in other constructor/initializer calls
    this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
    if (this.userObject !== undefined) {
      const lastname = this.userObject.lastname;
      this.voterartifactsService.initialize(lastname);
    } // to be added: other initializer calls included the one deprecated below
  }

  initialize() {} // to be deprecated as an external interface

  registerVoter() {} // to be deprecated as an external interface

  requestAccessCode(opaqueVoterId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      switch (opaqueVoterId) {
        case 'T0000':
          reject(
            new Error(this.statuscodeService.statusCode('VoterRecordNotFound'))
          );
          break;
        case 'T0001':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));
          break;
        default:
          resolve();
      }
    });
  }

  validateAccessCode(code: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.cachedAccessCode = code;
      switch (code) {
        case '00002':
          reject(
            new Error(this.statuscodeService.statusCode('CallOutOfOrderError'))
          );
          break;
        case '00003':
          reject(
            new Error(this.statuscodeService.statusCode('AccessCodeExpired'))
          );
          break;
        case '00004':
          reject(
            new Error(this.statuscodeService.statusCode('AccessCodeInvalid'))
          );
          break;
        case '00005':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));
          break;
        default: // to be added: call(s) to other functions related to successfully validated access code
          resolve();
      }
    });
  }
  constructBallotCryptograms(cvr: string): Promise<string> {
    return new Promise((resolve, reject) => {
      switch (this.cachedAccessCode) {
        case '00006':
          reject(
            new Error(this.statuscodeService.statusCode('CallOutOfOrderError'))
          );
          break;
        case '00007':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));
          break;
        case '00008':
          reject(
            new Error(this.statuscodeService.statusCode('CorruptCVRError'))
          );
          break;
        default:
          resolve('zyx098-wvu765-tsr432-1234');
      }
    });
  }

  spoilBallotCryptograms(): Promise<void> {
    return new Promise((resolve, reject) => {
      switch (this.cachedAccessCode) {
        case '00009':
          reject(
            new Error(this.statuscodeService.statusCode('CallOutOfOrderError'))
          );
          break;
        case '00010':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));
          break;
        case '00011':
          reject(
            new Error(
              this.statuscodeService.statusCode('ServerCommitmentError')
            )
          );
          break;
        default:
          resolve();
      }
    });
  }

  submitBallotCryptograms(affidavit: string): Promise<Receipt> {
    return new Promise((resolve, reject) => {
      switch (this.cachedAccessCode) {
        case '00012':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));
          break;
        case '00013':
          reject(
            new Error(this.statuscodeService.statusCode('CallOutOfOrderError'))
          );
          break;
        default:
          resolve({
            previousBoardHash: 'tsr432-wvu765-zyx098-4321',
            boardHash: 'zyx098-wvu765-tsr432-1234',
            registeredAt: '2020-03-01T10:00:00.000+01:00',
            serverSignature:
              // eslint-disable-next-line max-len
              'dbcce518142b8740a5c911f727f3c02829211a8ddfccabeb89297877e4198bc1,46826ddfccaac9ca105e39c8a2d015098479624c411b4783ca1a3600daf4e8fa',
            voteSubmissionId: 6,
          });
      }
    });
  }

  purgeData() {
    delete this.cachedAccessCode;
  }
}
