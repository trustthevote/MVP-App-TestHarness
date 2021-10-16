import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AvclientService } from './avclient.service';

describe('AvclientService', () => {
  let service: AvclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(AvclientService);
  });

  describe('requestAccessCode', () => {
    it('should reject 00000', async () => {
      await expectAsync(service.requestAccessCode('00000')).toBeRejectedWith(new Error('voter record not found'));
    });
    it('should reject T0000', async () => {
      await expectAsync(service.requestAccessCode('T0000')).toBeRejectedWith(new Error('voter record not found'));
    });
    it('should reject 00001', async () => {
      await expectAsync(service.requestAccessCode('00001')).toBeRejectedWith(new Error('network code'));
    });
    it('should reject T0001', async () => {
      await expectAsync(service.requestAccessCode('T0001')).toBeRejectedWith(new Error('network code'));
    });
    it('should resolve any other ID', async () => {
      await expectAsync(service.requestAccessCode('000')).toBeResolved();
    });
  });

  describe('validateAccessCode', () => {
    it('should reject 00002', async () => {
      await expectAsync(service.validateAccessCode('00002')).toBeRejectedWith(new Error('call out of order error'));
    });
    it('should reject 00003', async () => {
      await expectAsync(service.validateAccessCode('00003')).toBeRejectedWith(new Error('access code expired'));
    });
    it('should reject 00004', async () => {
      await expectAsync(service.validateAccessCode('00004')).toBeRejectedWith(new Error('access code invalid'));
    });
    it('should reject 00005', async () => {
      await expectAsync(service.validateAccessCode('00005')).toBeRejectedWith(new Error('network code'));
    });
    it('should resolve any other ID', async () => {
      await expectAsync(service.validateAccessCode('000')).toBeResolved();
    });
  });

  describe('constructBallotCryptograms', () => {
    it('should reject 00006', async () => {
      service.validateAccessCode('00006');
      await expectAsync(service.constructBallotCryptograms()).toBeRejectedWith(new Error('call out of order error'));
    });
    it('should reject 00007', async () => {
      service.validateAccessCode('00007');
      await expectAsync(service.constructBallotCryptograms()).toBeRejectedWith(new Error('network code'));
    });
    it('should reject 00008', async () => {
      service.validateAccessCode('00008');
      await expectAsync(service.constructBallotCryptograms()).toBeRejectedWith(new Error('corrupt CVR'));
    });
    it('should resolve any other ID', async () => {
      service.validateAccessCode('00009');
      await expectAsync(service.constructBallotCryptograms()).toBeResolvedTo('zyx098-wvu765-tsr432-1234');
    });
  });

  describe('spoilBallotCryptograms', () => {
    it('should reject 00009', async () => {
      service.validateAccessCode('00009');
      await expectAsync(service.spoilBallotCryptograms()).toBeRejectedWith(new Error('call out of order error'));
    });
    it('should reject 00010', async () => {
      service.validateAccessCode('00010');
      await expectAsync(service.spoilBallotCryptograms()).toBeRejectedWith(new Error('network code'));
    });
    it('should reject 00011', async () => {
      service.validateAccessCode('00011');
      await expectAsync(service.spoilBallotCryptograms()).toBeRejectedWith(new Error('server commitment error'));
    });
    it('should resolve any other ID', async () => {
      service.validateAccessCode('00014');
      await expectAsync(service.spoilBallotCryptograms()).toBeResolved();
    });
  });

  describe('submitBallotCryptograms', () => {
    it('should reject 00012', async () => {
      service.validateAccessCode('00012');
      await expectAsync(service.submitBallotCryptograms()).toBeRejectedWith(new Error('network code'));
    });
    it('should reject 00013', async () => {
      service.validateAccessCode('00013');
      await expectAsync(service.submitBallotCryptograms()).toBeRejectedWith(new Error('call out of order error'));
    });
    it('should resolve any other ID', async () => {
      service.validateAccessCode('00014');
      await expectAsync(service.submitBallotCryptograms()).toBeResolvedTo({
        previousBoardHash: 'tsr432-wvu765-zyx098-4321',
        boardHash: 'zyx098-wvu765-tsr432-1234',
        registeredAt: '2020-03-01T10:00:00.000+01:00',
        serverSignature:
          'dbcce518142b8740a5c911f727f3c02829211a8ddfccabeb89297877e4198bc1,46826ddfccaac9ca105e39c8a2d015098479624c411b4783ca1a3600daf4e8fa',
        voteSubmissionId: 6,
      });
    });
  });

  describe('purgeData', () => {
    it('should delete the cached access code', async () => {
      service.validateAccessCode('00009');
      service.purgeData();
      await expectAsync(service.spoilBallotCryptograms()).toBeResolved();
    });
  });
});
