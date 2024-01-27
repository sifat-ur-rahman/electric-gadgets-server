"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = void 0;
const zod_1 = require("zod");
//Create Validation Schema------
const productValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1),
        img: zod_1.z.string(),
        price: zod_1.z.number(),
        quantity: zod_1.z.number(),
        releaseDate: zod_1.z.string(),
        brand: zod_1.z.string().min(1),
        modelNumber: zod_1.z.string().min(1),
        category: zod_1.z.string().min(1),
        operatingSystem: zod_1.z.string().min(1),
        connectivity: zod_1.z.string(),
        powerSource: zod_1.z.string().min(1),
        features: zod_1.z.string(),
        weight: zod_1.z.number(),
        dimensions: zod_1.z.object({
            length: zod_1.z.number(),
            width: zod_1.z.number(),
            height: zod_1.z.number(),
        }),
    }),
});
//Update Validation Schema------
const productUpdateValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        img: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        quantity: zod_1.z.number().optional(),
        releaseDate: zod_1.z.string().optional(),
        brand: zod_1.z.string().optional(),
        modelNumber: zod_1.z.string().optional(),
        category: zod_1.z.string().optional(),
        operatingSystem: zod_1.z.string().optional(),
        connectivity: zod_1.z.string().optional(),
        powerSource: zod_1.z.string().optional(),
        features: zod_1.z.string().optional(),
        weight: zod_1.z.number().optional(),
        dimensions: zod_1.z
            .object({
            length: zod_1.z.number().optional(),
            width: zod_1.z.number().optional(),
            height: zod_1.z.number().optional(),
        })
            .optional(),
    }),
});
exports.productValidation = {
    productValidationSchema,
    productUpdateValidationSchema,
};
