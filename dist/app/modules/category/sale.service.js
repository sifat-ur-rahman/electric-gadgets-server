"use strict";
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
exports.CategoryService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const product_model_1 = require("../product/product.model");
const sale_model_1 = require("./sale.model");
const createSalesIntoDB = (Data) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, quantity, buyerName, saleDate } = Data;
    // Validate product existence
    const productData = yield product_model_1.Product.findById(productId);
    if (!productData) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Product not found');
    }
    // Validate available quantity
    if (productData.quantity < quantity) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Insufficient quantity available for sale');
    }
    // Create a sale record
    const sale = new sale_model_1.Sale({
        productId,
        quantity,
        buyerName,
        saleDate,
    });
    // Update the inventory
    productData.quantity -= quantity;
    // Remove product if quantity reaches zero
    if (productData.quantity === 0) {
        yield product_model_1.Product.findByIdAndDelete(productId);
    }
    else {
        yield productData.save();
    }
    const savedSaleResult = yield sale.save();
    return savedSaleResult;
});
const getSaleHistoryFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    // const result = await Sale.find().populate(
    //   'createdBy',
    //   '_id username email role',
    // );
    const weeklyData = yield sale_model_1.Sale.aggregate([
        {
            $group: {
                _id: { $week: '$saleDate' },
                totalSales: { $sum: '$quantity' },
            },
        },
    ]);
    const dailyData = yield sale_model_1.Sale.aggregate([
        {
            $group: {
                _id: { $dayOfMonth: '$saleDate' },
                totalSales: { $sum: '$quantity' },
            },
        },
    ]);
    const monthlyData = yield sale_model_1.Sale.aggregate([
        {
            $group: {
                _id: { $month: '$saleDate' },
                totalSales: { $sum: '$quantity' },
            },
        },
    ]);
    const yearlyData = yield sale_model_1.Sale.aggregate([
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
});
exports.CategoryService = {
    createSalesIntoDB,
    getSaleHistoryFromDB,
};
