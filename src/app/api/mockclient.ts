import { IDigitalReturnClient } from './drclient.service';
import { StatuscodeService } from './statuscode.service';

export class MockClient implements IDigitalReturnClient {
  private statuscodeService: StatuscodeService;
  private cachedAccessCode: string;

  constructor(statuscodeService: StatuscodeService) {
    this.statuscodeService = statuscodeService;
  }

  challengeBallot(): Promise<void> {
    return Promise.resolve();
  }

  registerVoter(): Promise<void> {
    return Promise.resolve();
  }

  initialize(): Promise<void> {
    return Promise.resolve();
  }

  requestAccessCode(opaqueVoterId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      switch (opaqueVoterId) {
        case 'T0000':
          reject(new Error(this.statuscodeService.statusCode('VoterRecordNotFound')));
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
          reject(new Error(this.statuscodeService.statusCode('CallOutOfOrderError')));
          break;
        case '00003':
          reject(new Error(this.statuscodeService.statusCode('AccessCodeExpired')));
          break;
        case '00004':
          reject(new Error(this.statuscodeService.statusCode('AccessCodeInvalid')));
          break;
        case '00005':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));
          break;
        default:
          // to be added: call(s) to other functions related to successfully validated access code
          resolve();
      }
    });
  }

  // eslint-disable-next-line unused-imports/no-unused-vars
  constructBallot(_cvr: any): Promise<string> {
    return new Promise((resolve, reject) => {
      switch (this.cachedAccessCode) {
        case '00006':
          reject(new Error(this.statuscodeService.statusCode('CallOutOfOrderError')));
          break;
        case '00007':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));
          break;
        case '00008':
          reject(new Error(this.statuscodeService.statusCode('CorruptCVRError')));
          break;
        default:
          resolve('zyx098-wvu765-tsr432-1234');
      }
    });
  }

  spoilBallot(): Promise<string> {
    return new Promise((resolve, reject) => {
      switch (this.cachedAccessCode) {
        case '00009':
          reject(new Error(this.statuscodeService.statusCode('CallOutOfOrderError')));
          break;
        case '00010':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));
          break;
        case '00011':
          reject(new Error(this.statuscodeService.statusCode('ServerCommitmentError')));
          break;
        default:
          resolve('qwerty-verifier-code');
      }
    });
  }

  // eslint-disable-next-line unused-imports/no-unused-vars
  castBallot(_affidavit: string): Promise<string> {
    return new Promise((resolve, reject) => {
      switch (this.cachedAccessCode) {
        case '00012':
          reject(new Error(this.statuscodeService.statusCode('NetworkError')));
          break;
        case '00013':
          reject(new Error(this.statuscodeService.statusCode('CallOutOfOrderError')));
          break;
        default:
          resolve('ballot-tracking-code');
      }
    });
  }

  purgeData(): void {
    delete this.cachedAccessCode;
  }
}
