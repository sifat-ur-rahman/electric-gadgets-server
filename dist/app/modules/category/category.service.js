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
exports.CategoryService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const sale_model_1 = require("./sale.model");
const createCategoryIntoDB = (Data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield sale_model_1.Sale.create(saveData);
    return result;
});
const getAllCategoryFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield sale_model_1.Sale.find().populate('createdBy', '_id username email role');
    return result;
});
exports.CategoryService = {
    createSalesIntoDB: createCategoryIntoDB,
    getAllCategoryFromDB,
};
