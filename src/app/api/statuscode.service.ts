import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatuscodeService {
  constructor() {}

  statusCode(statusCode) {
    const statusCodes = {
      VoterRecordNotFound: 'voter record not found',
      NetworkError: 'network code',
      CallOutOfOrderError: 'call out of order error',
      AccessCodeExpired: 'access code expired',
      AccessCodeInvalid: 'access code invalid',
      CorruptCVRError: 'corrupt CVR',
      ServerCommitmentError: 'server commitment error',
      Initialized: 'initialized',
      Uninitialized: 'uninitialized',
      OK: 'ok',
    };
    if (statusCode == 'VoterRecordNotFound') {
      const errorCode = 'voter record not found';
      return errorCode;
    } else if (statusCode == 'NetworkError') {
      const errorCode = 'network code';
      return errorCode;
    } else if (statusCode == 'CallOutOfOrderError') {
      const errorCode = 'call out of order error';
      return errorCode;
    } else if (statusCode == 'AccessCodeExpired') {
      const errorCode = 'access code expired';
      return errorCode;
    } else if (statusCode == 'AccessCodeInvalid') {
      const errorCode = 'access code invalid';
      return errorCode;
    } else if (statusCode == 'CorruptCVRError') {
      const errorCode = 'corrupt CVR';
      return errorCode;
    } else if (statusCode == 'ServerCommitmentError') {
      const errorCode = 'server commitment error';
      return errorCode;
    } else if (statusCode == 'Initialized') {
      const errorCode = 'initialized';
      return errorCode;
    } else if (statusCode == 'Uninitialized') {
      const errorCode = 'uninitialized';
      return errorCode;
    } else if (statusCode == 'OK') {
      const errorCode = 'ok';
      return errorCode;
    }
  }
}
