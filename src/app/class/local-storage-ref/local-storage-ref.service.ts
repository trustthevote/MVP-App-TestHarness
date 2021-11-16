import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageRef {
  public getLocalStorage(): Storage {
    return localStorage;
  }
}
