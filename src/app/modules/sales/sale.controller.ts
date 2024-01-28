import { NextFunction, Request, Response } from 'express';
import { CategoryService as SalesService } from './sale.service';

const createSales = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const saleData = req.body;
    const result = await SalesService.createSalesIntoDB(saleData);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Sale created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSaleHistory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await SalesService.getSaleHistoryFromDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Sales History retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const SalesControllers = {
  createSales,
  getSaleHistory,
};
