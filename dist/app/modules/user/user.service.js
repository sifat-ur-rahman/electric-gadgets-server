"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_model_1 = require("./user.model");
const auth_utils_1 = require("../auth/auth.utils");
const config_1 = __importDefault(require("../../config"));
const userRegistrationIntoDB = (Data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.create(Data);
    //create token and sent to the  client
    const jwtPayload = {
        userId: user === null || user === void 0 ? void 0 : user._id,
        email: user === null || user === void 0 ? void 0 : user.email,
        name: user === null || user === void 0 ? void 0 : user.username,
        role: user === null || user === void 0 ? void 0 : user.role,
    };
    const token = (0, auth_utils_1.createToken)(jwtPayload, config_1.default.jwt_access_secret, '10d');
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
});
exports.userService = {
    userRegistrationIntoDB,
};
