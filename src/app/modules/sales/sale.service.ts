/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Product } from '../product/product.model';
import { Sale } from './sale.model';

const createSalesIntoDB = async (Data: any) => {
  const { productId, quantity, buyerName, saleDate } = Data;

  // Validate product existence
  const productData = await Product.findById(productId);
  if (!productData) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found');
  }

  // Validate available quantity
  if (productData.quantity < quantity) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Insufficient quantity available for sale',
    );
  }

  // Create a sale record
  const sale = new Sale({
    productId,
    quantity,
    buyerName,
    saleDate,
  });

  // Update the inventory
  productData.quantity -= quantity;

  // Remove product if quantity reaches zero
  if (productData.quantity === 0) {
    await Product.findByIdAndDelete(productId);
  } else {
    await productData.save();
  }

  const savedSaleResult = await sale.save();

  return savedSaleResult;
};

const getSaleHistoryFromDB = async () => {
  // const result = await Sale.find().populate(
  //   'createdBy',
  //   '_id username email role',
  // );

  const weeklyData = await Sale.aggregate([
    {
      $group: {
        _id: { $week: '$saleDate' },
        totalSales: { $sum: '$quantity' },
      },
    },
  ]);

  const dailyData = await Sale.aggregate([
    {
      $group: {
        _id: { $dayOfMonth: '$saleDate' },
        totalSales: { $sum: '$quantity' },
      },
    },
  ]);

  const monthlyData = await Sale.aggregate([
    {
      $group: {
        _id: { $month: '$saleDate' },
        totalSales: { $sum: '$quantity' },
      },
    },
  ]);

  const yearlyData = await Sale.aggregate([
    {
      $group: {
        _id: { $year: '$saleDate' },
        totalSales: { $sum: '$quantity' },
      },
    },
  ]);

  const result = {
    weekly: weeklyData,
    daily: dailyData,
    monthly: monthlyData,
    yearly: yearlyData,
  };
  return result;
};

export const CategoryService = {
  createSalesIntoDB,
  getSaleHistoryFromDB,
};
