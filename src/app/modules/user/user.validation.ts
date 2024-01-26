import { z } from 'zod';

export const userRegistrationValidationSchema = z.object({
  body: z.object({
    username: z.string(),
    email: z.string(),
    password: z.string(),
    role: z.enum(['user']).default('user'),
  }),
});

export const userValidationSchema = {
  userRegistrationValidationSchema,
};
