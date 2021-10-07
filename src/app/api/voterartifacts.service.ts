import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoterartifactsService {
precinctId: string;
precinct: string;
cvrfile: string;
affidavitfile: string;
ballotfile: string;
constructor() {}

Initialize(lastName: string) {
  let key = lastName.substring(0, 1).toUpperCase();
  switch (key) {
    case 'A':
      this.precinctId = "precinct_1";
      this.precinct = "Precinct 1 Spaceport";
      this.cvrfile = "src/assets/files/port_precinct1/jetsons_port_precinct1_cvr.xml";
      this.affidavitfile = "src/assets/files/port_precinct1/precinct1_voter_affidavit.pdf";
      this.ballotfile = "src/assets/files/port_precinct1/jetsons_port-precinct1_ballot_marked.pdf";
      break;
    case 'B':
      this.precinctId = "precinct_2";
      this.precinct = "Precinct 2 Bedrock";
      this.cvrfile = "src/assets/files/bedrock_precinct2/jetsons_bedrock-precinct2_cvr.xml";
      this.affidavitfile = "src/assets/files/bedrock_precinct2/precinct2_voter_affidavit.pdf";
      this.ballotfile = "src/assets/files/bedrock_precinct2/jetsons_bedrock-precinct2_ballot_marked.pdf";
      break;
    case 'C':
      this.precinctId = "precinct_3";
      this.precinct = "Precinct 3 Downtown";
      this.cvrfile = "src/assets/files/downtown_precinct3/jetsons_downtown-precinct3_cvr.xml";
      this.affidavitfile = "src/assets/files/downtown_precinct3/precinct3_voter_affidavit.pdf";
      this.ballotfile = "src/assets/files/downtown_precinct3/jetsons_downtown-precinct3_ballot_marked.pdf";
      break;
    default:
      this.precinctId = "precinct_4";
      this.precinct = "Precinct 4 Spacetown";
      this.cvrfile = "src/assets/files/spacetown_precinct4/jetsons_spacetown_precinct4_cvr.xml";
      this.affidavitfile = "src/assets/files/spacetown_precinct4/jetsons_spacetown-precinct4_ballot_marked.pdf";
      this.ballotfile = "src/assets/files/spacetown_precinct4/precinct4_voter_affidavit.pdf";
      break

  };
  return this.precinct;
}

public get precinctName(): string {
  return this.precinct;
}

public get cvr(): string {
  return this.cvrfile; // Instead, open the file, and return the contents
}

public get affidavit(): string {
  return this.affidavitfile; // Instead, open the file, and return the contents
}

public get ballot(): string {
  return this.ballotfile; // Instead, open the file, and return the contents
}
}
