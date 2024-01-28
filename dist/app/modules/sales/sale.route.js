"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleRoute = void 0;
const express_1 = __importDefault(require("express"));
const sale_controller_1 = require("./sale.controller");
const sale_validation_1 = __importDefault(require("./sale.validation"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
//import auth from '../../middlewares/auth';
const router = express_1.default.Router();
router.post('/api/sales', 
//auth('user'),
(0, validateRequest_1.default)(sale_validation_1.default), sale_controller_1.SalesControllers.createSales);
router.get('/api/sales-history', sale_controller_1.SalesControllers.getSaleHistory);
exports.SaleRoute = router;
