import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatuscodeService {

  constructor() { }
  
  statusCode(statusCode){
    const statusCodes = {
      VoterRecordNotFound: 'voter record not found',
      NetworkError: 'network code',
      CallOutOfOrderError: 'call out of order error',
      AccessCodeExpired: 'access code expired',
      AccessCodeInvalid: 'access code invalid',
      CorruptCVRError: 'corrupt CVR',
      ServerCommitmentError: 'server commitment error',
  }
  if(statusCode == 'VoterRecordNotFound'){
    console.log("statusCode", statusCode);   
     const errorCode = 'voter record not found';
     return errorCode
  }
  else if(statusCode == 'NetworkError'){
    console.log("statusCode", statusCode);   
     const errorCode = 'network code';
     return errorCode
  }
  else if(statusCode == 'CallOutOfOrderError'){
    console.log("statusCode", statusCode);   
     const errorCode = 'call out of order error';
     return errorCode
  }
  else if(statusCode == 'AccessCodeExpired'){
    console.log("statusCode", statusCode);   
     const errorCode = 'access code expired';
     return errorCode
  }
  else if(statusCode == 'AccessCodeInvalid'){
    console.log("statusCode", statusCode);   
     const errorCode = 'access code invalid';
     return errorCode
  } 
   else if(statusCode == 'CorruptCVRError'){
    console.log("statusCode", statusCode);   
     const errorCode = 'corrupt CVR';
     return errorCode
  }
  else if(statusCode == 'ServerCommitmentError'){
    console.log("statusCode", statusCode);   
     const errorCode = 'server commitment error';
     return errorCode
  }
  }
}
