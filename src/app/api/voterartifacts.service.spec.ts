import { TestBed } from '@angular/core/testing';

import { VoterartifactsService } from './voterartifacts.service';

fdescribe('VoterartifactsService', () => {
  let service: VoterartifactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoterartifactsService);
  });

  describe('precinct 1', () => {
    it('should return the appropriate precinct name', () => {
      service.Initialize('Abc');
      expect(service.precinctName).toEqual('Precinct 1 Spaceport');
    });
    it('should return the appropriate cvr', () => {
      service.Initialize('Abc');
      expect(service.cvr).toContain('<BallotStyleId>port-precinct-ballot</BallotStyleId>');
    });
    it('should return the appropriate affidavit', () => {
      service.Initialize('Abc');
      expect(service.affidavit).toContain('PLDtsuBGnB8oGmkSkf3CiH2XadFk1CMNgwtY68QGPB+GUHLh2gGArwdC23YWBaMB');
    });
    it('should return the appropriate ballot', () => {
      service.Initialize('Abc');
      expect(service.ballot).toContain('y1GaE0c3iOtbevWq7CHVMysqKpxmXJ2wggOCZYUTeGUr+mQ5j4Iyb3UnZ/1Uo/7+');
    });
    it('should return the precinct name after initializing', () => {
      const precinct = service.Initialize('Abc');
      expect(precinct).toEqual('Precinct 1 Spaceport');
    });
  });

  describe('precinct 2', () => {
    it('should return the appropriate precinct name', () => {
      service.Initialize('Bcd');
      expect(service.precinctName).toEqual('Precinct 2 Bedrock');
    });
    it('should return the appropriate cvr', () => {
      service.Initialize('Bcd');
      expect(service.cvr).toContain('<BallotStyleId>bedrock-precinct-ballot</BallotStyleId>');
    });
    it('should return the appropriate affidavit', () => {
      service.Initialize('Bcd');
      expect(service.affidavit).toContain('Xk0oAsqcEGbSKkMIsVyuhkKUKVmCclIxsRTPkt3OY8bqsIuVlkmnBFURzfq8Ngr0');
    });
    it('should return the appropriate ballot', () => {
      service.Initialize('Bcd');
      expect(service.ballot).toContain('HwuBFwAA7DsIvFGXucDrtOiZy2Cnc6wu42Q0e3WdauB10plzj6ETBPQF//IG3uLi');
    });
    it('should return the precinct name after initializing', () => {
      const precinct = service.Initialize('Bcd');
      expect(precinct).toEqual('Precinct 2 Bedrock');
    });
  });

  describe('precinct 3', () => {
    it('should return the appropriate precinct name', () => {
      service.Initialize('Cde');
      expect(service.precinctName).toEqual('Precinct 3 Downtown');
    });
    it('should return the appropriate cvr', () => {
      service.Initialize('Cde');
      expect(service.cvr).toContain('<BallotStyleId>downtown-precinct-ballot</BallotStyleId>');
    });
    it('should return the appropriate affidavit', () => {
      service.Initialize('Cde');
      expect(service.affidavit).toContain('snCaxGyXhWdauCCQpjl/rTkXac6JmrPSyfYw+EBVFh5p4VyJ2aePZdRkUMpx9inV');
    });
    it('should return the appropriate ballot', () => {
      service.Initialize('Cde');
      expect(service.ballot).toContain('CYE36Qi8LCwshS+l/TsGAACwSwi8SUfgZWFhKXwp7d8xAACAXULgTToCLwsLS+FL');
    });
    it('should return the precinct name after initializing', () => {
      const precinct = service.Initialize('Cde');
      expect(precinct).toEqual('Precinct 3 Downtown');
    });
  });

  describe('precinct 4', () => {
    it('should return the appropriate precinct name', () => {
      service.Initialize('Def');
      expect(service.precinctName).toEqual('Precinct 4 Spacetown');
    });
    it('should return the appropriate cvr', () => {
      service.Initialize('Def');
      expect(service.cvr).toContain('<BallotStyleId>port-precinct-ballot</BallotStyleId>');
    });
    it('should return the appropriate affidavit', () => {
      service.Initialize('Def');
      expect(service.affidavit).toContain('+jSkT9NcQAtARYmnUd4FLPVSJ+X7AKqVO4ccv0aPjyE/FK+cNLd6FpbcFsA+gEDd');
    });
    it('should return the appropriate ballot', () => {
      service.Initialize('Def');
      expect(service.ballot).toContain('KATepCPwAgAAAEAoAm/SEXgBAAAAIBSBN+kIvAAAAAAQisCbdPt5Br2799o5hwEA');
    });
    it('should return the precinct name after initializing', () => {
      const precinct = service.Initialize('Xyz');
      expect(precinct).toEqual('Precinct 4 Spacetown');
    });
  });
});
