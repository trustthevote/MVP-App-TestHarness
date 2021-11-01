import { Injectable } from '@angular/core';
import { StatuscodeService } from 'src/app/api/statuscode.service';
import { Receipt } from 'src/app/class/receipt';
import { VoterartifactsService } from 'src/app/api/voterartifacts.service';
import { FakeClient } from './fakeclient';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AvclientService {
  serverURL: any;
  userObject: any;
  client: FakeClient;

  constructor(public statuscodeService: StatuscodeService, public voterartifactsService: VoterartifactsService) {}

  initServerURL(bulletinBoardURL) {
    this.serverURL = bulletinBoardURL; // to be used in other constructor/initializer calls
    this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
    if (this.userObject !== undefined) {
      const lastname = this.userObject.lastname;
      this.voterartifactsService.initialize(lastname);
    } // to be added: other initializer calls included the one deprecated below

    if (environment.production) {
      // TODO: Use the real AVClient
      // this.client = new AVClient(bulletinBoardURL);
    } else {
      this.client = new FakeClient(this.statuscodeService);
    }
  }

  initialize() {} // to be deprecated as an external interface

  registerVoter() {} // to be deprecated as an external interface

  requestAccessCode(opaqueVoterId: string): Promise<void> {
    return this.client.requestAccessCode(opaqueVoterId);
  }

  validateAccessCode(code: string): Promise<void> {
    return this.client.validateAccessCode(code);
  }

  constructBallotCryptograms(cvr: string): Promise<string> {
    return this.client.constructBallotCryptograms(cvr);
  }

  spoilBallotCryptograms(): Promise<void> {
    return this.client.spoilBallotCryptograms();
  }

  submitBallotCryptograms(affidavit: string): Promise<Receipt> {
    return this.client.submitBallotCryptograms(affidavit);
  }

  purgeData() {
    this.client.purgeData();
  }
}
