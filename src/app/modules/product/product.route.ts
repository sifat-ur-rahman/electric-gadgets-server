import express from 'express';
import { ProductControllers } from './product.controller';
import validateRequest from '../../middlewares/validateRequest';
import { productValidation } from './product.validation';
//import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/api/product',
  //auth('user'),
  validateRequest(productValidation.productValidationSchema),
  ProductControllers.createProduct,
);

router.get('/api/products', ProductControllers.getAllProducts);

router.get('/api/product/:productId', ProductControllers.getOneProduct);
router.delete('/api/product/:productId', ProductControllers.deletedProduct);

router.put(
  '/api/product/:productId',
  //auth('user'),
  validateRequest(productValidation.productUpdateValidationSchema),
  ProductControllers.updateProduct,
);

export const ProductRoute = router;
