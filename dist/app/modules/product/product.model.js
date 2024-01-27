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
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    releaseDate: { type: Date, required: true },
    brand: { type: String, required: true },
    modelNumber: { type: String, required: true },
    category: { type: String, required: true },
    operatingSystem: { type: String, required: true },
    connectivity: { type: String, required: true },
    powerSource: { type: String, required: true },
    features: { type: String, required: true },
    weight: { type: Number, required: true },
    dimensions: {
        length: { type: Number, required: true },
        width: { type: Number, required: true },
        height: { type: Number, required: true },
    },
}, { timestamps: true });
productSchema.methods.isProductExits = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingProduct = yield exports.Product.findById(id);
        return existingProduct;
    });
};
exports.Product = (0, mongoose_1.model)('Product', productSchema);
