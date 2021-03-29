import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { UserValidator } from './user.validator';
import { UserController } from './user.controller';

const UserRouter: Router = Router();

UserRouter.post('/', UserValidator.canCreateUser, wrapAsync(UserController.create));
UserRouter.get('/:id', UserValidator.canGetOrRemoveUser, wrapAsync(UserController.get));
UserRouter.get('/', UserValidator.canGetManyUsers, wrapAsync(UserController.getMany));
UserRouter.put('/:id', UserValidator.canUpdateUser, wrapAsync(UserController.update));
UserRouter.delete(
  '/:id',
  UserValidator.canGetOrRemoveUser,
  wrapAsync(UserController.delete),
);

export { UserRouter };
