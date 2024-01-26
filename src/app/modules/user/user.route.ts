import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { userControllers } from './user.controller';
import { userValidationSchema } from './user.validation';

const router = express.Router();

router.post(
  '/api/auth/register',
  validateRequest(userValidationSchema.userRegistrationValidationSchema),
  userControllers.createUserRegistration,
);

export const UserRoute = router;
