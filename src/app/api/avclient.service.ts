import { Injectable } from '@angular/core';
import { StatuscodeService } from 'src/app/api/statuscode.service';
import { VoterartifactsService } from 'src/app/api/voterartifacts.service';
import { MockClient as MockClient } from './mockclient';
import { IAVClient, AVClient, CastVoteRecord, BallotBoxReceipt } from '@aion-dk/js-client';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AvclientService {
  serverURL: any;
  userObject: any;
  client: IAVClient;

  constructor(public statuscodeService: StatuscodeService, public voterartifactsService: VoterartifactsService) {}

  // eslint-disable-next-line unused-imports/no-unused-vars
  private static convertNIST103ToAvCvr(_nistCvr: string): CastVoteRecord {
    //console.log('Ready to parse NIST CVR', nistCvr);

    return {};
  }

  initServerURL(bulletinBoardURL) {
    this.serverURL = bulletinBoardURL; // to be used in other constructor/initializer calls
    this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
    if (this.userObject !== undefined) {
      const lastname = this.userObject.lastname;
      this.voterartifactsService.initialize(lastname);
    } // to be added: other initializer calls included the one deprecated below

    if (environment.production) {
      this.client = new AVClient(bulletinBoardURL);
    } else {
      this.client = new MockClient(this.statuscodeService);
    }
  }

  async requestAccessCode(opaqueVoterId: string): Promise<void> {
    await this.client.initialize();
    await this.client.requestAccessCode(opaqueVoterId, 'voter-email-address@domain.tld');
  }

  async validateAccessCode(code: string): Promise<void> {
    await this.client.validateAccessCode(code);
    await this.client.registerVoter();
  }

  constructBallotCryptograms(nistCvr: string): Promise<string> {
    const cvr = AvclientService.convertNIST103ToAvCvr(nistCvr);
    return this.client.constructBallotCryptograms(cvr);
  }

  spoilBallotCryptograms(): Promise<void> {
    return this.client.spoilBallotCryptograms();
  }

  submitBallotCryptograms(affidavit: string): Promise<BallotBoxReceipt> {
    return this.client.submitBallotCryptograms(affidavit);
  }

  purgeData() {
    this.client.purgeData();
  }
}
