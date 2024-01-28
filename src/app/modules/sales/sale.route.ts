import express from 'express';
import { SalesControllers } from './sale.controller';
import saleValidationSchema from './sale.validation';
import validateRequest from '../../middlewares/validateRequest';
//import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/api/sales',
  //auth('user'),
  validateRequest(saleValidationSchema),
  SalesControllers.createSales,
);
router.get('/api/sales-history', SalesControllers.getSaleHistory);

export const SaleRoute = router;
