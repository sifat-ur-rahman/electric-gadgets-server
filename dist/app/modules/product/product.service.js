"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const product_model_1 = require("./product.model");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const createProductIntoDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(productData);
    return result;
});
const getAllProductsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { priceRange, releaseDate, brand, modelNumber, category, operatingSystem, connectivity, powerSource, features, weight, dimensions, } = query;
    const filterOptions = {};
    if (priceRange) {
        filterOptions.price = {
            $gte: query.priceRange.min,
            $lte: query.priceRange.max,
        };
    }
    if (releaseDate) {
        filterOptions.releaseDate = query.releaseDate;
    }
    if (brand) {
        filterOptions.brand = query.brand;
    }
    if (modelNumber) {
        filterOptions.modelNumber = query.modelNumber;
    }
    if (category) {
        filterOptions.category = query.category;
    }
    if (operatingSystem) {
        filterOptions.operatingSystem = query.operatingSystem;
    }
    if (connectivity) {
        filterOptions.connectivity = query.connectivity;
    }
    if (powerSource) {
        filterOptions.powerSource = query.powerSource;
    }
    if (features) {
        filterOptions.features = query.features;
    }
    if (weight) {
        filterOptions.weight = query.weight;
    }
    if (dimensions) {
        filterOptions.dimensions = query.dimensions;
    }
    const products = yield product_model_1.Product.find(filterOptions);
    return products;
});
const getOneProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById(id);
    return result;
});
const updateProductFromDB = (id, updatedProductData) => __awaiter(void 0, void 0, void 0, function* () {
    const { dimensions } = updatedProductData, remainingStudentData = __rest(updatedProductData, ["dimensions"]);
    const modifiedUpdatedData = Object.assign({}, remainingStudentData);
    if (dimensions && Object.keys(dimensions).length) {
        for (const [key, value] of Object.entries(dimensions)) {
            modifiedUpdatedData[`dimensions.${key}`] = value;
        }
    }
    const result = yield product_model_1.Product.findByIdAndUpdate(id, modifiedUpdatedData, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteOneProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndDelete(id);
    return result;
});
const duplicateProductFromDB = (id, duplicateProductData) => __awaiter(void 0, void 0, void 0, function* () {
    const existingProduct = yield product_model_1.Product.findById(id);
    if (!existingProduct) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Product not found');
    }
    const productObject = existingProduct.toObject();
    // Duplicate the product by creating a new
    const duplicatedProduct = new product_model_1.Product(Object.assign(Object.assign(Object.assign({}, productObject), { _id: new mongoose_1.default.Types.ObjectId(), name: `${existingProduct.name}` }), duplicateProductData));
    // Save the duplicated product to the database
    const result = yield duplicatedProduct.save();
    return result;
});
const bulkDeletedProductFromDB = (productsId) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate if itemIds array is provided
    if (!productsId || !Array.isArray(productsId) || productsId.length === 0) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Invalid itemIds in the request body');
    }
    // Perform bulk delete based on the provided itemIds
    const result = yield product_model_1.Product.deleteMany({ _id: { $in: productsId } });
    if (result.deletedCount > 0) {
        return result;
    }
});
exports.ProductService = {
    createProductIntoDB,
    getAllProductsFromDB,
    getOneProductFromDB,
    updateProductFromDB,
    deleteOneProductFromDB,
    duplicateProductFromDB,
    bulkDeletedProductFromDB,
};
