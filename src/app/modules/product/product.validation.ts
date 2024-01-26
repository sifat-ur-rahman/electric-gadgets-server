import { z } from 'zod';

//Create Validation Schema------

const productValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    price: z.number(),
    quantity: z.number(),
    releaseDate: z.string(),
    brand: z.string().min(1),
    modelNumber: z.string().min(1),
    category: z.string().min(1),
    operatingSystem: z.string().min(1),
    connectivity: z.string(),
    powerSource: z.string().min(1),
    features: z.string(),
    weight: z.number(),
    dimensions: z.object({
      length: z.number(),
      width: z.number(),
      height: z.number(),
    }),
  }),
});

//Update Validation Schema------

const productUpdateValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.number().optional(),
    quantity: z.number().optional(),
    releaseDate: z.string().optional(),
    brand: z.string().optional(),
    modelNumber: z.string().optional(),
    category: z.string().optional(),
    operatingSystem: z.string().optional(),
    connectivity: z.string().optional(),
    powerSource: z.string().optional(),
    features: z.string().optional(),
    weight: z.number().optional(),
    dimensions: z
      .object({
        length: z.number().optional(),
        width: z.number().optional(),
        height: z.number().optional(),
      })
      .optional(),
  }),
});
export const productValidation = {
  productValidationSchema,
  productUpdateValidationSchema,
};
