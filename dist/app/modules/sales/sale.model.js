"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sale = void 0;
const mongoose_1 = require("mongoose");
const saleSchema = new mongoose_1.Schema({
    quantity: { type: Number, required: true },
    buyerName: { type: String, required: true },
    saleDate: { type: Date, required: true },
    productId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Product', required: true },
}, { timestamps: true });
exports.Sale = (0, mongoose_1.model)('Sale', saleSchema);
