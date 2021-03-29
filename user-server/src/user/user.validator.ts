import * as Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from '../utils/errors/applicationError';
import {
  createUserSchema,
  getByIdSchema,
  updateUserSchema,
  getManySchema,
} from './user.schema';

export class UserValidator {
  static canCreateUser(req: Request, res: Response, next: NextFunction) {
    if (UserValidator.isObjectValid(req.body, createUserSchema)) next();
  }

  static canUpdateUser(req: Request, res: Response, next: NextFunction) {
    if (UserValidator.isObjectValid({ ...req.params, ...req.body }, updateUserSchema)) next();

  }

  static canGetManyUsers(req: Request, res: Response, next: NextFunction) {
    if (UserValidator.isObjectValid({ ...req.query }, getManySchema)) next();

  }

  static canGetOrRemoveUser(req: Request, res: Response, next: NextFunction) {
    if (UserValidator.isObjectValid(req.params, getByIdSchema)) next();

  }

  private static isObjectValid(object: any, schema: Joi.ObjectSchema<any>) {
    const validateResult = schema.validate(object);
    if (!validateResult.error) {
      return true;
    }
    let errorMessage = validateResult.error.details[0].message;
    errorMessage = errorMessage.replace(/"/ig, '');
    throw new ValidationError(errorMessage);
  }
}
