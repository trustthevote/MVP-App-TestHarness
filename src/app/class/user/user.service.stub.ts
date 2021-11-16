import { IUserService, User } from './user.service';

export class UserServiceStub implements IUserService {
  private user: User;

  getUser(): User | null {
    return this.user;
  }

  upsertUser(newUser: Partial<User>): void {
    const updatedUser = {
      ...this.user,
      ...newUser,
    };
    this.user = updatedUser;
  }

  resetUser(): void {
    this.user = null;
  }
}
