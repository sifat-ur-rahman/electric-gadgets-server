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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ProductData = req.body;
        const result = yield product_service_1.ProductService.createProductIntoDB(ProductData);
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Product created successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductService.getAllProductsFromDB(req.query);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Products retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getOneProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductService.getOneProductFromDB(productId);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Product By ID retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const updatedProductData = req.body;
        const result = yield product_service_1.ProductService.updateProductFromDB(id, updatedProductData);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Course updated successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const deletedProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductService.deleteOneProductFromDB(productId);
        if (result) {
            res.status(200).json({
                success: true,
                statusCode: 200,
                message: 'Product delete successfully',
                data: null,
            });
        }
    }
    catch (err) {
        next(err);
    }
});
const bulkDeletedProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productsId } = req.body;
        const result = yield product_service_1.ProductService.bulkDeletedProductFromDB(productsId);
        if (result) {
            res.status(200).json({
                success: true,
                statusCode: 200,
                message: 'Bulk Deleted Product delete successfully',
                data: null,
            });
        }
    }
    catch (err) {
        next(err);
    }
});
const duplicateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const duplicateProductData = req.body;
        const result = yield product_service_1.ProductService.duplicateProductFromDB(id, duplicateProductData);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Course updated successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.ProductControllers = {
    createProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deletedProduct,
    duplicateProduct,
    bulkDeletedProduct,
};
