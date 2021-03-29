import * as Joi from '@hapi/joi';
import { config } from '../config';

const mongoIdRegex = '^[0-9a-fA-F]{24}$';
const validIdRegex = new RegExp('^[0-9a-fA-F]{24}$');

export const createUserSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  rule: Joi.array(),
  date: Joi.date(),
});

export const getByIdSchema = Joi.object({
  id: Joi.string().regex(validIdRegex).required(),
});

export const getManySchema = Joi.object({
  query: {
    startIndex: Joi.number().integer().default(0),
    endIndex: Joi.number()
      .integer()
      .default(config.maxUserAmountToGet)
      .greater(Joi.ref('startIndex') || 0),
    name: Joi.string(),
    minCreationDate: Joi.date(),
    maxCreationDate: Joi.date(),
    minUpdateDate: Joi.date(),
    maxUpdateDate: Joi.date(),
    search: Joi.string(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    rule: Joi.array(),
    date: Joi.date(),
  },
});

export const updateUserSchema = Joi.object({
  id: Joi.string().regex(validIdRegex).required(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  email: Joi.string(),
  password: Joi.string(),
  rule: Joi.array(),
  date: Joi.date(),
});
