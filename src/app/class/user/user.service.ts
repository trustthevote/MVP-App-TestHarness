import { Injectable } from '@angular/core';

import { LocalStorageRef } from '../local-storage-ref/local-storage-ref.service';

const LOCAL_STORAGE_KEY = 'user';

export interface User {
  firstName: string;
  lastName: string;
}

export interface IUserService {
  getUser: () => User | null;
  upsertUser: (updatedUser: Partial<User>) => void;
  resetUser: () => void;
}

@Injectable({
  providedIn: 'root',
})
export class UserService implements IUserService {
  constructor(private localStorageRef: LocalStorageRef) {}

  /**
   * Fetches and returns the current user object from local storage
   * If the user does not exist, it will return null
   *
   * @returns
   */
  getUser(): User | null {
    const userString = this.localStorageRef.getLocalStorage().getItem(LOCAL_STORAGE_KEY);
    if (!userString || userString === '{}') {
      return null;
    }
    return JSON.parse(userString) as User;
  }

  /**
   * Inserts or updates local storage with the partial values specified
   *
   * @param updatedUser
   */
  upsertUser(updatedUser: Partial<User>): void {
    const currentUser = this.getUser() || this.getEmptyUser();
    const user = {
      ...currentUser,
      ...updatedUser,
    };
    this.localStorageRef.getLocalStorage().setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
  }

  /**
   * Deletes the user item in localstorage
   */
  resetUser(): void {
    this.localStorageRef.getLocalStorage().removeItem(LOCAL_STORAGE_KEY);
  }

  private getEmptyUser(): User {
    return {
      firstName: '',
      lastName: '',
    };
  }
}
