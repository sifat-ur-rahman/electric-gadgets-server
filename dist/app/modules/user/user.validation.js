"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationSchema = exports.userRegistrationValidationSchema = void 0;
const zod_1 = require("zod");
exports.userRegistrationValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string(),
        email: zod_1.z.string(),
        password: zod_1.z.string(),
        role: zod_1.z.enum(['user']).default('user'),
    }),
});
exports.userValidationSchema = {
    userRegistrationValidationSchema: exports.userRegistrationValidationSchema,
};
