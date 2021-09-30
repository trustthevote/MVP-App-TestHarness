import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoterartifactsService {
precinctId: string;
precinct: string;
constructor() {}

openPreFile(lastName: string) {
  console.log("lastName", lastName);

  let key = lastName.substring(0, 1).toUpperCase();
  console.log("key", key);
  switch (key) {
    case 'A':
      this.precinctId = "precinct_1";
      this.precinct = "Precinct 1 Spaceport";
      break;
    case 'B':
      this.precinctId = "precinct_2";
      this.precinct = "Precinct 2 Bedrock";
      break;
    case 'C':
      this.precinctId = "precinct_3";
      this.precinct = "Precinct 3 Downtown";
      break;
    default:
      this.precinctId = "precinct_4";
      this.precinct = "Precinct 4 Spacetown";
      break

  };
  let valPrecinct = {
    preId: this.precinctId,
    preVal: this.precinct
  }
  return valPrecinct

}

public get cvr(): string {
  return "this is a cvr";
}

public get affidavit(): string {
  return "this is an affidavit";
}

public get ballot(): string {
  return "this is a ballot";
}
}
