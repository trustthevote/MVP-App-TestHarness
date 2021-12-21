import { Injectable } from '@angular/core';

import { StatuscodeService } from 'src/app/api/statuscode.service';
import { VoterartifactsService } from 'src/app/api/voterartifacts.service';
import { MockClient as MockClient } from './mockclient';
import { UserService } from 'src/app/class/user/user.service';

// todo: replace anys in favor of real types
export interface IBackendClient {
  initialize(electionConfig?: any): Promise<void>;
  requestAccessCode(opaqueVoterId: string, email: string): Promise<void>;
  validateAccessCode(code: string): Promise<void>;
  registerVoter(): Promise<void>;
  constructBallotCryptograms(cvr: any): Promise<string>;
  spoilBallotCryptograms(): Promise<void>;
  submitBallotCryptograms(affidavit: any): Promise<any>;
  purgeData(): void;
}

@Injectable({
  providedIn: 'root',
})
export class AvclientService {
  serverURL: any;
  client: IBackendClient;

  constructor(
    public statuscodeService: StatuscodeService,
    public voterartifactsService: VoterartifactsService,
    private userService: UserService
  ) {}

  initServerURL(bulletinBoardURL) {
    this.serverURL = bulletinBoardURL; // to be used in other constructor/initializer calls
    if (this.userService.getUser() !== undefined) {
      this.voterartifactsService.initialize(this.userService.getUser().lastName);
    } // to be added: other initializer calls included the one deprecated below

    this.client = new MockClient(this.statuscodeService);
  }

  async requestAccessCode(opaqueVoterId: string): Promise<void> {
    await this.client.initialize();

    const email = `mvptuser@yahoo.com`;
    await this.client.requestAccessCode(opaqueVoterId, email);
  }

  async validateAccessCode(code: string): Promise<void> {
    await this.client.validateAccessCode(code);
    await this.client.registerVoter();
  }

  constructBallotCryptograms(nistCvr: string): Promise<string> {
    // todo: handle nist conversion as necessary, for now we just pass the nist CVR
    return this.client.constructBallotCryptograms(nistCvr);
  }

  spoilBallotCryptograms(): Promise<void> {
    return this.client.spoilBallotCryptograms();
  }

  submitBallotCryptograms(affidavit: string): Promise<any> {
    return this.client.submitBallotCryptograms(affidavit);
  }

  purgeData() {
    this.client.purgeData();
  }
}
