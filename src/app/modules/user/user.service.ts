/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */

import { TUser } from './user.interface';
import { User } from './user.model';

import { createToken } from '../auth/auth.utils';
import config from '../../config';

const userRegistrationIntoDB = async (Data: TUser) => {
  const user = await User.create(Data);

  //create token and sent to the  client

  const jwtPayload = {
    userId: user?._id,
    email: user?.email,
    name: user?.username,
    role: user?.role,
  };

  const token = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    '10d',
  );
  const respondData = {
    _id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
  };
  return {
    user: respondData,
    token,
  };
};

export const userService = {
  userRegistrationIntoDB,
};
