"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const saleValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        productId: zod_1.z.string(),
        quantity: zod_1.z.number().positive(),
        buyerName: zod_1.z.string().min(1),
        saleDate: zod_1.z.string(),
    }),
});
exports.default = saleValidationSchema;
