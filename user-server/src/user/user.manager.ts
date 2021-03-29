import { UserNotFoundError } from '../utils/errors/applicationError';
import { User } from './user.interface';
import { UserRepository } from './user.repository';

export class UserManager {
  static create(user: User) {
    return UserRepository.create(user);
  }

  static async getById(id: string) {
    const user = await UserRepository.getById(id);
    if (!user) throw new UserNotFoundError();

    return user;
  }

  static getMany(
    startIndex: number,
    endIndex: number,
    userFields: Partial<User>,
    minCreationDate?: Date,
    maxCreationDate?: Date,
    minUpdateDate?: Date,
    maxUpdateDate?: Date,
    search?: string,
  ) {
    return UserRepository.getMany(
      startIndex,
      endIndex,
      userFields,
      minCreationDate,
      maxCreationDate,
      minUpdateDate,
      maxUpdateDate,
      search,
    );
  }

  static async update(id: string, userFields: Partial<User>) {
    const user = await UserRepository.update(id, userFields);
    if (!user) throw new UserNotFoundError();

    return user;
  }

  static async delete(id: string) {
    const user = await UserRepository.delete(id);
    if (!user) throw new UserNotFoundError();

    return user;
  }
}
