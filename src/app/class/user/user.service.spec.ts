import { TestBed } from '@angular/core/testing';

import { LocalStorageRef } from 'src/app/class/local-storage-ref/local-storage-ref.service';
import { LocalStorageRefStub } from 'src/app/class/local-storage-ref/local-storage-ref.stub';
import { User, UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: LocalStorageRef, useClass: LocalStorageRefStub }],
    });
    service = TestBed.inject(UserService);
  });

  describe('getUser', () => {
    it('should return null if no user exists in local storage', () => {
      expect(service.getUser()).toBeNull();
    });
    it('should return the user if its been set', () => {
      const user: User = { firstName: 'foo', lastName: 'bar' };
      service.upsertUser(user);
      expect(service.getUser()).toEqual(user);
    });
  });
  describe('upsertUser', () => {
    it('should set a new user', () => {
      const user: User = { firstName: 'foo', lastName: 'abc' };
      service.upsertUser(user);
      expect(service.getUser()).toEqual(user);
    });
    it('should accept a partial user, setting only those values', () => {
      const user: Partial<User> = { firstName: 'foo' };
      service.upsertUser(user);
      expect(service.getUser()).toEqual({ firstName: 'foo', lastName: '' });
    });
    it('should accept a partial user, overriding only those values', () => {
      service.upsertUser({ firstName: 'foo', lastName: 'bar' });
      service.upsertUser({ lastName: 'abc' });
      expect(service.getUser()).toEqual({ firstName: 'foo', lastName: 'abc' });
    });
  });
  describe('resetUser', () => {
    it('should remove the user completely', () => {
      service.resetUser();
      expect(service.getUser()).toBeNull();
    });
  });
});
